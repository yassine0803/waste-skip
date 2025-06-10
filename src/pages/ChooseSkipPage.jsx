import { useMemo } from 'react';
import { useSkips } from '../hooks/useSkips';
import SkipCard from '../components/SkipCard';
import SkeletonCard from '../components/SkeletonCard';

const ChooseSkipPage = () => {
  const { skips, loading, error } = useSkips('NR32', 'Lowestoft');

  const skeletonCards = useMemo(() =>
    Array(6).fill(null).map((_, i) => <SkeletonCard key={`skeleton-${i}`} />),
    []
  );

  const skipCards = useMemo(() =>
    skips.map((skip) => <SkipCard key={skip.id} skip={skip} />),
    [skips]
  );
  
  return (
    <div className="min-h-screen bg-gray-50 font-['Inter'] text-gray-900 pb-32 sm:pb-28 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {error && (
          <div className="mb-6 sm:mb-8 bg-red-900/50 backdrop-blur-sm border border-red-700 text-red-200 px-4 sm:px-6 py-3 sm:py-4 rounded-xl">
            <div className="flex items-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-sm sm:text-base">{error}</span>
            </div>
          </div>
        )}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                Available Skip Sizes
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Compare sizes and prices to find the perfect skip for your project
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {loading ? skeletonCards : skipCards}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSkipPage;
