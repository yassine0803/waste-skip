import { useSkipSelection } from '../context/SkipSelectionContext.jsx';

const BottomBar = () => {
    const { selectedSkip, isBottomBarVisible } = useSkipSelection();

    if (!isBottomBarVisible || !selectedSkip) return null;

    const handleBack = () => { };

    const handleContinue = () => { }; 
    
    return (
        <>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={handleBack} />
            <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl z-50 transform transition-all duration-500 ease-out animate-in slide-in-from-bottom">
                <div className="flex justify-center pt-2 pb-1 lg:hidden">
                    <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
                </div>
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2 lg:py-3">
                    <div className="flex flex-col gap-3 lg:hidden">
                        <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-100">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-gray-600">Selected Skip</div>
                                    <div className="text-sm font-bold text-gray-900">{selectedSkip.size} Yards</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-medium text-gray-600">Price</div>
                                <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    £{selectedSkip.price_before_vat}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={handleBack}
                                className="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 font-medium text-sm rounded-xl transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-md active:scale-[0.98]"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleContinue}
                                className="flex-[2] px-6 py-2.5 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 active:from-blue-700 active:via-blue-800 active:to-indigo-800 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-1.5"
                            >
                                <span>Continue</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl px-4 py-2.5 border border-blue-100">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-gray-600">Selected Skip</div>
                                    <div className="text-sm font-bold text-gray-900">{selectedSkip.size} Yards</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="text-xs font-medium text-gray-600">Price:</div>
                                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    £{selectedSkip.price_before_vat}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleBack}
                                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 font-medium text-sm rounded-xl transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-md active:scale-[0.98]"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleContinue}
                                className="px-8 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 active:from-blue-700 active:via-blue-800 active:to-indigo-800 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center gap-2"
                            >
                                <span>Continue</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-100 text-center lg:text-left">
                        <p className="text-xs text-gray-500 leading-relaxed">
                            Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BottomBar;
