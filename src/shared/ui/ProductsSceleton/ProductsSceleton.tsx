const ProductsSkeleton = () => (
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 9 }).map((_, i) => (
      <div
        key={i}
        className="flex animate-pulse flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3"
      >
        <div className="aspect-[4/3] w-full rounded-xl bg-gray-200" />

        <div className="h-3 w-16 rounded bg-gray-200" />

        <div className="h-4 w-3/4 rounded bg-gray-200" />

        <div className="mt-1 flex gap-2">
          <div className="h-4 w-12 rounded bg-gray-200" />
          <div className="h-4 w-10 rounded bg-gray-200" />
        </div>

        <div className="mt-2 h-5 w-20 rounded bg-gray-200" />

        <div className="mt-auto flex gap-2">
          <div className="h-9 flex-1 rounded-lg bg-gray-200" />
          <div className="h-9 flex-1 rounded-lg bg-gray-200" />
        </div>
      </div>
    ))}
  </div>
);

export { ProductsSkeleton };
