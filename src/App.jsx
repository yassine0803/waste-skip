import ChooseSkipPage from './pages/ChooseSkipPage';
import { SkipSelectionProvider } from './context/SkipSelectionContext.jsx';
import BottomBar from './components/BottomBar';

const App = () => {
  return (
    <SkipSelectionProvider>
      <ChooseSkipPage />
      <BottomBar />
    </SkipSelectionProvider>
  );
};

export default App;
