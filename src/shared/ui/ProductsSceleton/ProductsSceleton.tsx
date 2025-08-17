const ProductsSkeleton = () => (
  <div className="section-container grid grid-cols-1 gap-3 pb-12 sm:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 9 }).map((_, i) => (
      <div
        key={i}
        className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3"
      >
        {/* Переливающийся блок */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        </div>

        <div className="relative h-3 w-16 overflow-hidden rounded bg-gray-200">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        </div>

        <div className="relative h-4 w-3/4 overflow-hidden rounded bg-gray-200">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        </div>

        <div className="mt-1 flex gap-2">
          <div className="relative h-4 w-12 overflow-hidden rounded bg-gray-200">
            <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
          </div>
          <div className="relative h-4 w-10 overflow-hidden rounded bg-gray-200">
            <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
          </div>
        </div>

        <div className="relative mt-2 h-5 w-20 overflow-hidden rounded bg-gray-200">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        </div>

        <div className="mt-auto flex gap-2">
          <div className="relative h-9 flex-1 overflow-hidden rounded-lg bg-gray-200">
            <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
          </div>
          <div className="relative h-9 flex-1 overflow-hidden rounded-lg bg-gray-200">
            <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export { ProductsSkeleton };
