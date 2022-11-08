export type WidgetsRes = {
  title: string;
  color: string;
  percent: number;
  icon: string;
};

export type CarType = {
  id: number;
  name: string;
  capacity: number;
  system: string;
  type: string;
  img: string;
  price: number;
  fav?: boolean;
  state: "old" | "new";
};

export type SaleCard = {
  id: string;
  recommend: number;
  name: string;
  price: number;
  total: number;
  img: string;
  color: string;
};

export type InfoCardType = {
  id: string;
  span: boolean;
  img: string;
  data: string;
  disc: string;
  action?: string;
  url?: string;
  color: string;
};
