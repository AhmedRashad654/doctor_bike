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

// edit show product
export const EditShowProduct = async (
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

// edit product
export const EditAndAddProduct = async (
  newData: IProduct | null,
  queryClient: QueryClient | null,
  ProductId: string | undefined,
  showToast: (message: string, type: "success" | "error") => void
) => {
  if (!newData) return;
  try {
    const formData = new FormData();
    if (newData.id === 0) {
      formData.append("id", "0");
      formData.append("DateAdd", new Date().toISOString());
      formData.append("DateUpdate", new Date().toISOString());
      if (newData.NormalImg) {
        for (let i = 0; i < newData?.NormalImg?.length; i++) {
          formData.append("NormalImg", newData.NormalImg[i]);
        }
      }
      if (newData.threeDImg) {
        for (let i = 0; i < newData?.threeDImg?.length; i++) {
          formData.append("threeDImg", newData.threeDImg[i]);
        }
      }
      if (newData.ViewImg) {
        for (let i = 0; i < newData?.ViewImg?.length; i++) {
          formData.append("ViewImg", newData.ViewImg[i]);
        }
      }
    } else {
      formData.append("id", newData.id.toString());
      formData.append("rate", newData.rate.toString());
      formData.append("DateUpdate", new Date().toISOString());
    }
    formData.append("NameAr", newData.NameAr as string);
    formData.append("NameEng", newData.NameEng as string);
    formData.append("NameAbree", newData.NameAbree as string);
    formData.append(
      "SupCategoryId",
      newData.SupCategoryId ? newData.SupCategoryId.toString() : ""
    );
    formData.append("DescriptionAr", newData.DescriptionAr as string);
    formData.append("DescriptionEng", newData.DescriptionEng as string);
    formData.append("DescriptionAbree", newData.DescriptionAbree as string);

    formData.append(
      "IsNewItem",
      newData.isNewItem === false ? "false" : "true"
    );
    formData.append("IsShow", newData.isShow === false ? "false" : "true");
    formData.append(
      "isMoreSales",
      newData.isMoreSales === false ? "false" : "true"
    );
    formData.append("Model", newData.Model as string);
    formData.append(
      "ManufactureYear",
      newData?.ManufactureYear
        ? newData.ManufactureYear?.toString()
        : newData?.manufactureYear?.toString()
    );
    formData.append(
      "NormailPrice",
      newData?.NormailPrice
        ? newData.NormailPrice.toString()
        : newData?.normailPrice?.toString()
    );
    formData.append(
      "WholesalePrice",
      newData?.WholesalePrice
        ? newData.WholesalePrice.toString()
        : newData?.wholesalePrice?.toString()
    );
    formData.append(
      "Stock",
      newData?.Stock ? newData.Stock.toString() : newData?.stock?.toString()
    );
    formData.append(
      "Discount",
      newData?.Discount
        ? newData.Discount.toString()
        : newData?.discount?.toString()
    );
    formData.append("Video", newData.Video as File);

    // call api
    const response = await request.post(`/Items/ManageItem`, formData);
    if (response?.status === 200) {
      if (newData?.id === 0) {
        showToast("تم ضافة ألمنتج بنجاح", "success");
      } else {
        showToast("تم تحديث ألمنتج بنجاح", "success");
        if (queryClient === null) return;
        queryClient.setQueryData(
          ["GetSingleProductById", ProductId],
          (oldData: { data: IProduct } | undefined) => {
            if (!oldData) return;
            return {
              ...oldData,
              data: {
                ...oldData?.data,
                ...response?.data,
                normalImagesItems: oldData?.data?.normalImagesItems,
                _3DImagesItems: oldData?.data?._3DImagesItems,
                viewImagesItems: oldData?.data?.viewImagesItems,
              },
            };
          }
        );
      }
    }
  } catch (error) {
    console.log(error);
    showToast("حدث خطا", "error");
    return null;
  }
};

// add and img to item
export const AddImgToItem = async (
  typeImg: string,
  productId: string | undefined,
  queryClient: QueryClient,
  image: File,
  showToast: (message: string, type: "success" | "error") => void
) => {
  try {
    const formData = new FormData();
    formData.append("img", image);
    const response = await request.post(
      `/Items/AddImgToItem?ItemId=${productId}&TypeImg=${typeImg}`,
      formData
    );
    if (response?.status === 200) {
      showToast("تم  رفع صورة جديدة بنجاح", "success");
      queryClient.setQueryData(
        ["GetSingleProductById", productId],
        (oldData: { data: IProduct } | undefined) => {
          if (!oldData) return;
          return {
            ...oldData,
            data: {
              ...oldData?.data,
              normalImagesItems:
                typeImg === "Normal"
                  ? [...(oldData.data.normalImagesItems || []), response?.data]
                  : oldData?.data?.normalImagesItems,
              _3DImagesItems:
                typeImg === "_3d"
                  ? [...(oldData.data._3DImagesItems || []), response?.data]
                  : oldData?.data?._3DImagesItems,
              viewImagesItems:
                typeImg === "View"
                  ? [...(oldData.data.viewImagesItems || []), response?.data]
                  : oldData?.data?.viewImagesItems,
            },
          };
        }
      );
    }
  } catch {
    showToast("حدث خطا اثناء اضافة صورة", "error");
    return null;
  }
};

// remove img from item
export const RemoveImgToItem = async (
  typeImg: string,
  productId: string | undefined,
  queryClient: QueryClient,
  imageId: number,
  showToast: (message: string, type: "success" | "error") => void
) => {
  try {
    const response = await request.post(
      `/Items/DeleteImg?imgId=${imageId}&ItemId=${productId}&type=${typeImg}`
    );
    if (response?.status === 200) {
      showToast("تم حذف الصورة بنجاح", "success");
      queryClient.setQueryData(
        ["GetSingleProductById", productId],
        (oldData: { data: IProduct } | undefined) => {
          if (!oldData) return;
          return {
            ...oldData,
            data: {
              ...oldData?.data,
              normalImagesItems:
                typeImg === "Normal"
                  ? oldData?.data?.normalImagesItems?.filter(
                      (e) => e?.id !== imageId
                    )
                  : oldData?.data?.normalImagesItems,
              _3DImagesItems:
                typeImg === "_3d"
                  ? oldData?.data?._3DImagesItems?.filter(
                      (e) => e?.id !== imageId
                    )
                  : oldData?.data?._3DImagesItems,
              viewImagesItems:
                typeImg === "View"
                  ? oldData?.data?.viewImagesItems?.filter(
                      (e) => e?.id !== imageId
                    )
                  : oldData?.data?.viewImagesItems,
            },
          };
        }
      );
    }
  } catch {
    showToast("حدث خطا اثناء حذف الصورة", "error");
    return null;
  }
};
