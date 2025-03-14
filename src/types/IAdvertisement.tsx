export interface IAdvertisement {
  id: number;
  title: string;
  description: string;
  urlAds: string;
  imgUrl: string;
  img: File | null;
  isShow: boolean;
  addDate: string;
  userAddId: string;
  updateDate: string;
  userUpdateId: string;
}
