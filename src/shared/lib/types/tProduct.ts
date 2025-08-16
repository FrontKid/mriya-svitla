interface IProductParam {
  text: string | number;
  name: string;
}

type TParam = string | number | null;

interface IProduct {
  image: string | string[];
  vendor: string;
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
