import { XMLParser } from "fast-xml-parser";

import { globalConfig } from "./globalConfig";
import { ERRORS } from "./errors";

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
  brand: string;
  maxCost: string;
}

const formatPhone = (number: string) => {
  const MAX_NUMBER_LENGTH = 12;

  const digits = number.replace(/\D/g, "");

  if (digits.length !== MAX_NUMBER_LENGTH) {
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
  const POWER_ID = "Потужність, Вт";
  const TEMP_ID = "Колірна температура";
  const VOLTAGE_ID = "Напруга, В";
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
  value: string | null,
  setValue: (_: string | null) => void,
) => {
  if (value) {
    setValue(value);
  } else {
    setValue(null);
  }
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
  const { query, categoryId, minCost, maxCost, brand } = option;

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

  if (brand) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.vendor.toLowerCase() === brand.toLowerCase();
    });
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

const fetchProducts = async () => {
  let error = null;
  let data = null;
  let productsData = null;

  try {
    if (!process.env.API_URL) {
      throw new Error(ERRORS.API_UNDEFINED);
    }
    data = await fetch(process.env.API_URL, {
      next: { revalidate: globalConfig.PRODUCTS_UPDATE_DATA },
    });

    if (!data.ok) {
      throw new Error(`${ERRORS.FETCHED_WITH_ERROR} ${data.status}`);
    }

    const xmlText = await data?.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      textNodeName: "text",
      attributeNamePrefix: "",
    });

    const productOrder = { Ardero: 0, Ledcoin: 1, Feron: 2 };

    productsData = parser.parse(xmlText);

    const sortedItems = [...productsData.yml_catalog.items.item]
      .filter((item: IProduct) => {
        const removedZeroCost = item.price !== 0;

        return (
          removedZeroCost &&
          !globalConfig.deletedGoodsIds.includes(String(item.categoryId))
        );
      })
      .sort(
        (a: IProduct, b: IProduct) =>
          productOrder[a.vendor] - productOrder[b.vendor],
      );

    productsData = {
      ...productsData,
      yml_catalog: {
        ...productsData.yml_catalog,
        items: {
          ...productsData.yml_catalog.items,
          item: sortedItems,
        },
      },
    };

    return { productsData, error };
  } catch (errorIncome) {
    error = errorIncome;
    return { productsData: null, error };
  }
};

export {
  formatPhone,
  parseProductName,
  fetchProducts,
  updateQueryParam,
  getPreparedProducts,
};
