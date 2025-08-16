/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct, IProductParam } from "@/shared/lib/types/tProduct";

interface IParams {
  name: string;
  vendor: string;
  model: string;
  code: string;
}

interface IOptions {
  query: string;
  categoryId: string;
  minCost: string;
  maxCost: string;
}

const formatPhone = (number: string) => {
  const digits = number.replace(/\D/g, "");

  if (digits.length !== 12) {
    return number;
  }

  const country = digits.slice(0, 2);
  const code = digits.slice(2, 5);
  const part1 = digits.slice(5, 8);
  const part2 = digits.slice(8, 10);
  const part3 = digits.slice(10, 12);

  return `+${country} (${code}) ${part1}-${part2}-${part3}`;
};

const getParam = (params: IProductParam[], name: string) => {
  return params?.find((param) => param.name === name)?.text ?? null;
};

const parseProductName = (name: string, params: IProductParam[]) => {
  const REGEXP_SOCKET = /\b(R7s|E14|GU10|G9|G4|GX53|G23|G13|G5\.3)/gi;
  const REGEXP_POWER = /(\d+)\s*(Вт|W)/gi;
  const REGEXP_VOLTAGE = /(\d+)\s*V/gi;
  const REGEXP_TEMP = /(\d+)\s*K/gi;
  const POWER_ID = "Мощность, Вт";
  const TEMP_ID = "Цветовая температура";
  const VOLTAGE_ID = "Напряжение, В";
  const SOCKET_ID = "Цоколь";

  const power = getParam(params, POWER_ID);
  const colorTemperature = getParam(params, TEMP_ID);
  const voltage = getParam(params, VOLTAGE_ID);
  const socket = getParam(params, SOCKET_ID);

  const cleanedName = name
    .replace(REGEXP_POWER, "")
    .replace(REGEXP_TEMP, "")
    .replace(REGEXP_SOCKET, "")
    .replace(REGEXP_VOLTAGE, "")
    .trim();

  return {
    cleanedName,
    power: power ? `${power}Вт` : power,
    colorTemperature,
    socket,
    voltage: voltage ? `${voltage}В` : voltage,
  };
};

const updateQueryParam = (
  paramName: string,
  value: string | null,
  searchParams: URLSearchParams,
  router: any,
  pathname: string,
) => {
  const params = new URLSearchParams(searchParams);

  if (value) {
    params.set(paramName, value);
  } else {
    params.delete(paramName);
  }

  router.push(`${pathname}?${params.toString()}`, { scroll: false });
};

const isProductMatch = (query: string, params: IParams) => {
  const qeuryLowerCased = query.toLowerCase().trim();
  const nameLowerCased = params.name.toLowerCase().trim();
  const brandLowerCased = params.vendor.toLowerCase().trim();

  const filteredByName = nameLowerCased.includes(qeuryLowerCased);
  const filteredByBrand = brandLowerCased.includes(qeuryLowerCased);
  const filteredByModel = params.model.includes(qeuryLowerCased);
  const filteredByCode = params.code.includes(qeuryLowerCased);

  return filteredByName || filteredByBrand || filteredByModel || filteredByCode;
};

const getPreparedProducts = (products: IProduct[], option: IOptions) => {
  const { query, categoryId, minCost, maxCost } = option;
  let filteredProducts: IProduct[] = [...products];

  if (query) {
    filteredProducts = filteredProducts.filter(({ name, upc, vendor, model }) =>
      isProductMatch(query, {
        name,
        vendor,
        model: String(model),
        code: String(upc),
      }),
    );
  }

  if (categoryId) {
    filteredProducts = filteredProducts.filter((product) => {
      return String(product.categoryId) === categoryId;
    });
  }

  if (minCost) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= +minCost,
    );
  }

  if (maxCost) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= +maxCost,
    );
  }

  filteredProducts = filteredProducts.map((product) => {
    const { cleanedName, power, colorTemperature, socket, voltage } =
      parseProductName(product.name, product.param);

    return {
      ...product,
      name: cleanedName,
      power: power,
      colorTemperature,
      socket,
      voltage,
    };
  });

  return filteredProducts;
};

export { formatPhone, parseProductName, updateQueryParam, getPreparedProducts };
