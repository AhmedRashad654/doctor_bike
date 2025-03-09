import { AxiosError } from "axios";
import { request } from "../../axios/axios";
import { ILoginUser } from "../../types/user";
import Cookies from "js-cookie";
// login user
export const LoginUser = async (
  data: ILoginUser,
  showToast: (message: string, type: "success" | "error") => void
) => {
  try {
    const response = await request.post(`/Auth/login`, {
      email: data.email,
      password: data.password,
    });
    if (response?.status === 200) {
      const roles = response?.data?.user?.roles;
      const isSuberAdmin = roles.some(
        (role: { name: string }) => role.name === "SuperAdmin"
      );
      if (isSuberAdmin) {
        Cookies.set("token_doctor_bike", response?.data.token, { expires: 7 });
        showToast("تم تسجيل الدخول بنجاح", "success");
        return response;
      } else {
        showToast("هذا الحساب غير مصرح له بالدخول", "error");
        return null;
      }
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      showToast(error?.response?.data?.message, "error");
    }
  }
};
