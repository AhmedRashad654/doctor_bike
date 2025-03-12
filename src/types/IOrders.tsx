export interface IPaginationOrders {
  totalRowsCount: number;
  totalPagesCount: number;
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
  details: [];
}

export interface IOrders {
  rows: IDataOrders[];
  paginationInfo: IPaginationOrders;
}
