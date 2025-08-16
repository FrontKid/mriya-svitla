type TTagProps = {
  tagName: string | number;
};

const Tag = ({ tagName }: TTagProps) => {
  return (
    <span className="bg-card-product border-line rounded-[10px] border border-solid px-2 py-0.5 text-xs text-gray-700">
      {tagName}
    </span>
  );
};

export { Tag };
