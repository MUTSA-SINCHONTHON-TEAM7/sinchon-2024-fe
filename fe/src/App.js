import { Routes, Route } from 'react-router-dom';
import VoteList from './pages/VoteList.jsx';
import FundingList from './pages/FundingList.jsx';
import TopicSuggest from './pages/TopicSuggest.jsx';
import LectureRegist from './pages/LectureRegist.jsx';
import { SearchResults } from './pages/SearchResults';

function App() {
  return (
    <>
      <Routes>
        <Route path='/vote' element={<VoteList/>}/>
        <Route path='/funding' element={<FundingList/>}/>
        <Route path="/searchresult" element={<SearchResults/>}/>
        <Route path="/topic-suggest" element={<TopicSuggest/>}/>
        <Route path="/lecture-regist" element={<LectureRegist/>}/>
      </Routes>
    </>
  );
}

export default App;
