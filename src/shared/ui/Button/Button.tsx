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
  title: string;
  className?: string;
  onClick?: () => void;
};

type TButtonProps = {
  children: ReactNode;
  title: string;
  className?: string;
  type?: "btn" | "simple";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const AppLink: FC<TLinkProps> = ({
  children,
  className,
  type,
  href,
  title,
  onClick,
  target,
}) => {
  return (
    <Link
      href={href}
      title={title}
      onClick={onClick}
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
  title,
  className,
  onClick,
  type,
}) => {
  return (
    <button
      title={title}
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
