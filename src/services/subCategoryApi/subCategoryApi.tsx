import { Dispatch } from "@reduxjs/toolkit";
import { request } from "../../axios/axios";
import { ISubCategory } from "../../types/subCategory";
import {
  setAddNewItemSubCategory,
  setEditSubCategory,
} from "../../redux/features/subCategorySlice";

export const EditAndAddDataSubCategory = async (
  newData: ISubCategory | null,
  dispatch: Dispatch,
  showToast: (message: string, type: "success" | "error") => void
) => {
  if (!newData) return;

  const formData = new FormData();
  formData.append("UserAdd", "<string>");
  formData.append("UserEdit", "<string>");
  if (newData.id != 0) {
    formData.append("DateEdit", new Date().toISOString());
  } else {
    formData.append("DateAdd", new Date().toISOString());
    formData.append("DateEdit", new Date().toISOString());
  }

  for (const [key, value] of Object.entries(newData)) {
    if (value === null || value === undefined) continue;
    if (key === "imageUrl" && value instanceof File) {
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
      `/SupCategorys/ManageSupCategory`,
      formData
    );

    if (response?.status === 200) {
      if (newData.id == 0) {
        showToast("تم اضافة الفئة الثانوية بنجاح", "success");
        dispatch(setAddNewItemSubCategory(response?.data));
      } else {
        showToast("تم تحديث الفئة الثانوية بنجاح", "success");
        dispatch(setEditSubCategory(response?.data));
      }
    }
  } catch {
    showToast("حدث خطأ", "error");
  }
};
