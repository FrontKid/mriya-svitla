import clsx from "clsx";

interface IImageSceletonProps {
  classname?: string;
}

const ImageSceleton = ({ classname }: IImageSceletonProps) => (
  <div
    className={clsx(
      classname,
      "absolute inset-0 flex animate-pulse items-center justify-center bg-gray-200",
    )}
  >
    <svg
      className="h-6 w-6 animate-spin text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  </div>
);

export { ImageSceleton };
