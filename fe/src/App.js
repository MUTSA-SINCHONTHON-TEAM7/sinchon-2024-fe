import { Routes, Route } from 'react-router-dom';
import VoteList from './pages/VoteList.jsx';
import FundingList from './pages/FundingList.jsx';
import { SearchResults } from './pages/SearchResults';
import Main from './pages/Main.js';
import KakaoLogRedirect from './pages/KakaoLogRedirect.js';
import Login from './pages/Login.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/main' element={<Main/>}/>
        <Route path="/oauth2/kakao" element={<KakaoLogRedirect />} />
        <Route path="/login" element={<Login />} />
        <Route path='/vote' element={<VoteList/>}/>
        <Route path='/funding' element={<FundingList/>}/>
        <Route path="/searchresult" element={<SearchResults/>}/>
      </Routes>
    </>
  );
}

export default App;
