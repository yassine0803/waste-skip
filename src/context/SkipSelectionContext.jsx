import { createContext, useContext, useState } from 'react';

const SkipSelectionContext = createContext(undefined);

export const SkipSelectionProvider = ({ children }) => {
    const [selectedSkip, setSelectedSkip] = useState(null);
    const selectSkip = (skip) => {
        setSelectedSkip(skip);
    };

    const clearSelection = () => {
        setSelectedSkip(null);
    };

    const hideBottomBar = () => {
        setSelectedSkip(null);
    };

    const contextValue = {
        selectedSkip,
        isBottomBarVisible: selectedSkip !== null,
        selectSkip,
        clearSelection,
        hideBottomBar
    };

    return (
        <SkipSelectionContext.Provider value={contextValue}>
            {children}
        </SkipSelectionContext.Provider>
    );
};

export const useSkipSelection = () => {
    const context = useContext(SkipSelectionContext);

    if (context === undefined) {
        throw new Error(
            'Error'
        );
    }

    return context;
};
