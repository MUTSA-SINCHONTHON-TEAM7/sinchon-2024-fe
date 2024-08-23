import { Routes, Route } from 'react-router-dom';
import { SearchResults } from './pages/SearchResults';

function App() {
  return (
    <>
      <Routes>
        <Route path="/searchresult" element={<SearchResults/>}/>
      </Routes>
    </>
  );
}

export default App;
