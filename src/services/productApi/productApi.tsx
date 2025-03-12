import { request } from "../../axios/axios";

// get product by sub category
export const GetProductBySubCategory = async (
  valueSearch: number,
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
