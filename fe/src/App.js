import { Routes, Route } from 'react-router-dom';
import VoteList from './pages/VoteList.jsx';
import FundingList from './pages/FundingList.jsx';
import { SearchResults } from './pages/SearchResults';

function App() {
  return (
    <>
      <Routes>
        <Route path='/vote' element={<VoteList/>}/>
        <Route path='/funding' element={<FundingList/>}/>
        <Route path="/searchresult" element={<SearchResults/>}/>
      </Routes>
    </>
  );
}

export default App;
