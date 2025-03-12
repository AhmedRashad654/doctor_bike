import { request } from "../../axios/axios";
import { ICity } from "../../types/cities";
import { Dispatch } from "@reduxjs/toolkit";
import { setAddCity, setEditCity } from "../../redux/features/citySlice";

// edit on city
export const EditAndAddCity = async (
  newData: ICity,
  dispatch: Dispatch,
  showToast: (message: string, type: "success" | "error") => void
) => {
  try {
    const response = await request.post(`/Cities/ManageCity`, newData);
    if (response?.status === 200) {
      if (newData.id != 0) {
        showToast("تم تحديث ألمدينة بنجاح", "success");
        dispatch(setEditCity(response?.data));
      } else {
        showToast("تم اضافة ألمدينة بنجاح", "success");
        dispatch(setAddCity(response?.data));
      }
    }
  } catch {
    showToast("حدث خطا", "error");
    return null;
  }
};
