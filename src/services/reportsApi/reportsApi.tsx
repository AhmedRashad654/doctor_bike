import { request } from "../../axios/axios";

// get reports
export const getReports = async (page: number) => {
  try {
    return await request.post(`/Complaints/GetAllComplaints`, {
      paginationInfo: {
        pageIndex: page,
        pageSize: 40,
      },
    });
  } catch {
    return null;
  }
};
