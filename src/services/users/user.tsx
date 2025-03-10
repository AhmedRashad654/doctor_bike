import { request } from "../../axios/axios";

// get user by type
export const getUserByType = async (user: string | null, page: number) => {
  try {
    return await request.post(`/Users/GetAllUsers?type=${user}`, {
      paginationInfo: {
        pageIndex: page,
        pageSize: 20,
      },
    });
  } catch {
    return null;
  }
};
