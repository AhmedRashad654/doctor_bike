import { IProduct } from "./IProduct";

export interface IPaginationOrders {
  totalRowsCount: number;
  totalPagesCount: number;
}
export interface IDetailsOrder {
  id: number;
  orderId: 39;
  itemId: 14;
  quantity: 3;
  itemPrice: 30.0;
  totalPriceWithDiscound: 45.0;
  totalPriceWithOutDiscound: 50.0;
  item: IProduct;
}
export interface IDataOrders {
  id: number;
  customerId: string;
  customerName: string;
  phoneNum1: string;
  phoneNum2: string;
  cityId: number;
  address: string;
  status: string;
  isWholesale: boolean;
  priceDelivery: number;
  totalPriceWithDiscound: number;
  totalPriceWithOutDiscound: number;
  userAddId: string;
  dateAdd: string;
  userUpdate: string;
  dateUpdate: string | Date;
  details: IDetailsOrder[];
}

export interface IOrders {
  rows: IDataOrders[];
  paginationInfo: IPaginationOrders;
}
