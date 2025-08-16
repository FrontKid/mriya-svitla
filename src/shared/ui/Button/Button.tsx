/* eslint-disable no-unused-vars */
import Link from "next/link";
import clsx from "clsx";
import { FC, ReactNode } from "react";

type TTarget = "_blank" | "_parent" | "_self" | "_top";
type TLinkType = "btn" | "btn-outline" | "simple";

type TLinkProps = {
  children: ReactNode;
  href: string;
  type?: TLinkType;
  target?: TTarget;
  className?: string;
};

type TButtonProps = {
  children: ReactNode;
  className?: string;
  type?: "btn" | "simple";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const AppLink: FC<TLinkProps> = ({
  children,
  className,
  type,
  href,
  target,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(className, {
        "btn px-4.5 py-3": type === "btn",
        "btn-outline": type === "btn-outline",
        "": type === "simple",
      })}
    >
      {children}
    </Link>
  );
};

const AppButton: FC<TButtonProps> = ({
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <button
      className={clsx(className, "cursor-pointer px-4.5 py-3", {
        btn: type === "btn",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { AppLink, AppButton };
