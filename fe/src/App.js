import { Routes, Route } from 'react-router-dom';
import TopicList from './pages/TopicList.jsx';
import FundingList from './pages/FundingList.jsx';
import TopicSuggest from './pages/TopicSuggest.jsx';
import LectureRegist from './pages/LectureRegist.jsx';
import LectureDetail from './pages/LectureDetail.jsx';
import { SearchResults } from './pages/SearchResults';
import Main from './pages/Main.js';
import KakaoLogRedirect from './pages/KakaoLogRedirect.js';
import Login from './pages/Login.js';
import { VoteCompletePage } from './pages/VoteCompletePage';
import { VotingPage } from './pages/VotingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/oauth2/kakao" element={<KakaoLogRedirect />} />
        <Route path="/login" element={<Login />} />
        <Route path='/topic' element={<TopicList/>}/>
        <Route path='/funding' element={<FundingList/>}/>
        <Route path="/searchresult" element={<SearchResults/>}/>
        <Route path="/topic-suggest" element={<TopicSuggest/>}/>
        <Route path="/lecture-regist" element={<LectureRegist/>}/>
        <Route path="/lecture/:lectureId" element={<LectureDetail/>}/>
        <Route path="/votecompletespecific" element={<VoteCompletePage/>}/>
        <Route path="/votingspecific" element={<VotingPage/>}/>
      </Routes>
    </>
  );
}

export default App;
