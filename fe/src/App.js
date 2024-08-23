import { Routes, Route } from 'react-router-dom';
import VoteList from './pages/VoteList.jsx';
import FundingList from './pages/FundingList.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/vote' element={<VoteList/>}/>
        <Route path='/funding' element={<FundingList/>}/>
      </Routes>
    </>
  );
}

export default App;
