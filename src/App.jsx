import { useEffect } from 'react';
import { track } from './utils/pixel';
import Marmitas from "./pages/Marmitas";

function App() {
  useEffect(() => {
    track('ViewContent', { content_name: 'Landing CSP Embalagens' });
  }, []);

  return <Marmitas />;
}

export default App;
