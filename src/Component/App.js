import DesignApp from './designApp';
import PreviewPage from './previewPage/previewPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useInitialDesignData } from './data/useInitialDesignData';
function App() {
  useInitialDesignData()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesignApp />} exact>
        </Route>
        <Route path="/preview" element={<PreviewPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
