import { memo } from 'react';

const SkeletonCard = memo(() => (
  <div className="cursor-pointer group relative bg-gray-200 rounded-2xl border-0 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 overflow-hidden animate-pulse aspect-[4/3]">
    <div className="w-full h-full bg-gray-300 rounded-2xl"></div>

    <div className="absolute top-6 right-6 bg-gray-400 h-8 w-20 rounded-full"></div>

    <div className="absolute bottom-6 left-6">
      <div className="bg-gray-400 h-8 w-16 rounded mb-1"></div>
    </div>

    <div className="absolute bottom-6 right-6 bg-gray-400 h-6 w-32 rounded-full"></div>
  </div>
));

export default SkeletonCard;
