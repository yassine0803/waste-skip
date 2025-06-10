import { useMemo, useCallback, memo } from 'react';
import { useSkipSelection } from '../context/SkipSelectionContext.jsx';

const imageUrl = import.meta.env.VITE_IMAGE_BASE_URL;

const SkipCard = memo(({ skip }) => {
  const { selectSkip, selectedSkip } = useSkipSelection();

  const isSelected = selectedSkip?.id === skip.id;
  const computedValues = useMemo(() => ({
    imageSrc: `${imageUrl}/${skip.size}-yarder-skip.jpg`,
    imageAlt: `${skip.size} Yard Skip`,
    formattedPrice: `£${skip.price_before_vat}`,
    sizeDisplay: `${skip.size} Yards`,
    showRoadWarning: !skip.allowed_on_road
  }), [skip.size, skip.price_before_vat, skip.allowed_on_road]);
  const handleCardClick = useCallback(() => {
    if (isSelected) {
      selectSkip(null);
    } else {
      selectSkip(skip);
    }
  }, [skip, selectSkip, isSelected]);

  return (
    <div
      onClick={handleCardClick}
      className={`cursor-pointer group relative bg-white rounded-2xl transition-all duration-500 h-full shadow-lg hover:shadow-2xl hover:-translate-y-1 overflow-hidden ${isSelected
        ? 'border-2 border-blue-500 shadow-blue-200/50 shadow-2xl'
        : 'border-0'
        }`}
    >
      <div className="relative overflow-hidden rounded-2xl h-full">
        <img
          src={computedValues.imageSrc}
          alt={computedValues.imageAlt}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-110 contrast-105"
          style={{
            filter: 'brightness(1.1) contrast(1.05) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        {isSelected && (
          <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-[1px]" />
        )}

        {isSelected && (
          <div className="absolute top-4 left-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
        <div className="absolute top-6 right-6 transform group-hover:scale-110 transition-transform duration-300">
          <div className={`px-4 py-2 rounded-2xl text-sm font-bold shadow-lg backdrop-blur-sm border transition-all duration-300 ${isSelected
            ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-blue-400/50'
            : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-white/20'
            }`}>
            <span className="drop-shadow-sm">{computedValues.sizeDisplay}</span>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 text-white">
          <div className="text-3xl font-bold drop-shadow-lg">
            {computedValues.formattedPrice}
          </div>
        </div>{computedValues.showRoadWarning && (
          <div className="absolute bottom-6 right-6">
            <div className="bg-red-500/90 backdrop-blur-sm border border-red-400/50 rounded-xl px-3 py-1.5 shadow-lg">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-white drop-shadow">Not Allowed On Road</span>
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
          <button
            onClick={handleCardClick}
            className={`cursor-pointer group/btn py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl active:scale-[0.98] border-0 transform scale-95 group-hover:scale-100 ${isSelected
              ? 'bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white'
              : 'bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 text-white'
              }`}
          >
            <span>{isSelected ? 'Selected' : 'Get This Skip Now'}</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});

export default SkipCard;
