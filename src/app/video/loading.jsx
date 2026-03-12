import React from "react";

const loading = () => {
  return (
    <div className="px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-500 border-t-red-600 [animation-duration:5s]" />
          <p className="text-sm text-gray-300">Loading video details...</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="aspect-video animate-pulse rounded-xl bg-[#262626]" />
            <div className="mt-4 h-6 w-3/4 animate-pulse rounded bg-[#2d2d2d]" />
            <div className="mt-3 h-4 w-1/3 animate-pulse rounded bg-[#2d2d2d]" />
          </div>

          <div className="space-y-4">
            <div className="h-24 animate-pulse rounded-xl bg-[#262626]" />
            <div className="h-24 animate-pulse rounded-xl bg-[#262626]" />
            <div className="h-24 animate-pulse rounded-xl bg-[#262626]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
