import { Dispatch } from "@reduxjs/toolkit";
import { request } from "../../axios/axios";
import { IMainCategory } from "../../types/category";
import { setEditMainCategory } from "../../redux/features/mainCategorySlice";

export const EditDataMainCategory = async (
  newData: IMainCategory | null,
  dispatch: Dispatch,
  showToast: (message: string, type: "success" | "error") => void
) => {
  if (!newData) return;

  const formData = new FormData();
  formData.append("UserAdd", "123");
  formData.append("UserEdit", "123");
  formData.append("DateEdit", new Date().toISOString());
  for (const [key, value] of Object.entries(newData)) {
    if (value === null || value === undefined) continue;
    if (key === "imageUrl" && value instanceof File) {
      console.log(value, "filrsss");
      formData.append("imageUrl", value);
    }
    if (typeof value === "boolean") {
      formData.append(key, value ? "true" : "false");
    } else if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value.toString());
    }
  }

  try {
    const response = await request.post(
      `/MainCategorys/ManageMainCategory`,
      formData
    );

    if (response?.status === 200) {
      showToast("تم تحديث الفئة بنجاح", "success");
      dispatch(setEditMainCategory(response?.data));
    }
  } catch {
    showToast("حدث خطأ أثناء الفئة", "error");
  }
};
