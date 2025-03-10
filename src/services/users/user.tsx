import { QueryClient } from "@tanstack/react-query";
import { request } from "../../axios/axios";
import { IDataUserAPI } from "../../types/user";

// get user by type
export const GetUserByType = async (user: string | null, page: number) => {
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

// edit block user
export const EditBlock = async (
  user: IDataUserAPI | null,
  queryClient: QueryClient,
  userQuery: string | null,
  page: number,
  showToast: (message: string, type: "success" | "error") => void
) => {
  try {
    const response = await request.post(`/Users/Edit`, user);
    if (response?.status === 200) {
      showToast("تم تحديث حالة المستخدم بنجاح", "success");
      queryClient.setQueryData(
        ["getUserByType", userQuery, page],
        (oldData: { data: { rows: IDataUserAPI[] } } | undefined) => {
          if (!oldData) return;
          return {
            ...oldData,
            data: {
              ...oldData.data,
              rows: oldData?.data?.rows?.map((existingUser) =>
                existingUser?.id === user?.id
                  ? { ...existingUser, block: user.block }
                  : existingUser
              ),
            },
          };
        }
      );
    }
  } catch {
    showToast("حدث خطا اثناء تحديث حالة المستخدم", "error");
    return null;
  }
};

// edit on role
export const EditOnRole = async (
  type: string,
  openModalEditRole: { id: string } | null,
  selectedRole: string,
  showToast: (message: string, type: "success" | "error") => void
) => {
  try {
    const response = await request.post(
      `/Users/${type}?UserId=${openModalEditRole?.id}&nameRole=${selectedRole}`
    );
    if (response?.status === 200) {
      showToast(type === "AddRoleToUser"? "تم اضافة الصلاحية بنجاح":"تم ازالة الصلاحية بنجاح", "success");
    }
  } catch {
    showToast(
      type === "AddRoleToUser"
        ? `حدث خطا اثناء التعديل علي الصلاحية ربما المستخدم لدية الصلاحية بالفعل`
        : "حدث خطا اشناء التعديل علي الصلاحية ربما المستخدم ليس لدية هذة الصلاحية",
      "error"
    );

    return null;
  }
};
