export interface IImageProduct {
  id: number;
  imageUrl: string;
  itemId: number;
}
export interface IProduct {
  id: number;
  nameAr: string;
  nameEng: string;
  nameAbree: string;
  NameAr?: string;
  NameEng?: string;
  NameAbree?: string;
  supCategoryId: string;
  isShow: boolean;
  model: string;
  isNewItem: boolean;
  isMoreSales: boolean;
  rate: number;
  manufactureYear: number;
  descriptionAr: string;
  DescriptionAr?: string;
  descriptionEng: string;
  DescriptionEng?: string;
  descriptionAbree: string;
  DescriptionAbree?: string;
  videoUrl: string | null;
  normailPrice: number;
  NormailPrice?: number;
  wholesalePrice: number;
  WholesalePrice?: number;
  stock: number;
  discount: number;
  userIdAdd: string;
  dateAdd: string;
  userIdUpdate: string;
  dateUpdate: string | Date;
  DateUpdate?: string | Date;
  supCategory: null;
  normalImagesItems: IImageProduct[];
  _3DImagesItems: IImageProduct[];
  viewImagesItems: IImageProduct[];
}
