import { FC } from "react";

type TEmptyProps = object;

const Empty: FC<TEmptyProps> = () => {
  return <h1 className="">Empty</h1>;
};

export { Empty };
