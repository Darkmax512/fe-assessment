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
};
