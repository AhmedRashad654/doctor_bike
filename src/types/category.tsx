export interface IMainCategory {
  id: number;
  nameAr: string;
  nameEng: string;
  nameAbree: string;
  descriptionAr: string;
  descriptionEng: string;
  descriptionAbree: string;
  imageUrl: string;
  isShow: boolean;
  serAdd: string;
  dateAdd: string;
  serEdit: string;
  dateEdit: Date;
  supCategories: [];
}
export interface IMainCategoryRedux {
  data: IMainCategory[];
  status: "idle" | "loading" | "succeeded" | "failed";
}
