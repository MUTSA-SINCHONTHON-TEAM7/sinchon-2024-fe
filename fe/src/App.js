import { Routes, Route } from 'react-router-dom';
import VoteList from './pages/VoteList.jsx';
import FundingList from './pages/FundingList.jsx';
import { SearchResults } from './pages/SearchResults';
import { VoteCompletePage } from './pages/VoteCompletePage';
import { VotingPage } from './pages/VotingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/vote' element={<VoteList/>}/>
        <Route path='/funding' element={<FundingList/>}/>
        <Route path="/searchresult" element={<SearchResults/>}/>
        <Route path="/votecompletespecific" element={<VoteCompletePage/>}/>
        <Route path="/votingspecific" element={<VotingPage/>}/>
      </Routes>
    </>
  );
}

export default App;
