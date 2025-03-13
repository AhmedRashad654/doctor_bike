import { QueryClient } from "@tanstack/react-query";
import { request } from "../../axios/axios";
import { IProduct } from "../../types/IProduct";

// get product by sub category
export const GetProductBySubCategory = async (
  valueSearch: number | null,
  page: number
) => {
  try {
    return await request.post(
      `/Items/GetAllItemsToSup?supCategoryId=${valueSearch}`,
      {
        paginationInfo: {
          pageIndex: page,
          pageSize: 20,
        },
      }
    );
  } catch {
    return null;
  }
};

// get single product by id
export const GetSingleProductById = async (productId: string | undefined) => {
  try {
    return await request.post(`/Items/GetItemById?itemId=${productId}`, {
      listRelatedObjects: ["ViewImgs", "NormalImgs", "_3DImgs"],
      paginationInfo: {
        pageIndex: 0,
        pageSize: 0,
      },
    });
  } catch {
    return null;
  }
};
// edit product
export const EditProduct = async (
  newData: IProduct | null,
  queryClient: QueryClient,
  valueSearch: number | null,
  page: number,
  showToast: (message: string, type: "success" | "error") => void
) => {
  if (!newData) return;
  try {
    const formData = new FormData();
    if (newData.id != 0) {
      formData.append("DateUpdate", new Date().toISOString());
    } else {
      formData.append("DateAdd", new Date().toISOString());
      formData.append("DateUpdate", new Date().toISOString());
    }

    for (const [key, value] of Object.entries(newData)) {
      if (value === null || value === undefined) continue;
      if (key === "Video" && value instanceof File) {
        formData.append("Video", value);
      }
      if (typeof value === "boolean") {
        formData.append(key, value ? "true" : "false");
      } else if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else if (key === "nameAr" || key === "nameEng" || key === "nameAbree") {
        formData.append(key.charAt(0).toUpperCase() + key.slice(1), value);
      } else {
        formData.append(key, value.toString());
      }
    }

    // call api
    const response = await request.post(`/Items/ManageItem`, formData);
    if (response?.status === 200) {
      showToast("تم تحديث حالة ألمنتج بنجاح", "success");
      queryClient.setQueryData(
        ["GetProductBySubCategory", valueSearch, page],
        (oldData: { data: { rows: IProduct[] } } | undefined) => {
          if (!oldData) return;
          return {
            ...oldData,
            data: {
              ...oldData.data,
              rows: oldData?.data?.rows?.map((existingProduct) =>
                existingProduct?.id === newData?.id
                  ? response?.data
                  : existingProduct
              ),
            },
          };
        }
      );
    }
  } catch {
    showToast("حدث خطا اثناء تحديث حالة المنتج", "error");
    return null;
  }
};
