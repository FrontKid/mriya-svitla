interface IProductParam {
  text: string | number;
  name: string;
}

type TParam = string | number | null;
type TVendor = "Ardero" | "Ledcoin" | "Feron";

interface IProduct {
  image: string | string[];
  vendor: TVendor;
  name: string;
  power: TParam;
  price: number;
  colorTemperature: TParam;
  socket: TParam;
  voltage: TParam;
  categoryId: number;
  model: number;
  param: IProductParam[];
  upc: number;
  available: string;
}

export type { IProduct, IProductParam };
