import { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from "react";
import styled from "styled-components";
import { BeforeLoginNavBar } from '../components/BeforeLoginNavBar';
import { AfterLoginNavBar } from '../components/AfterLoginNavBar';
import { SubjectItem } from '../components/SubjectItem';
import { axiosInstance } from '../api';


const ResultPage=styled.div`
    margin:auto;
    width:1620px;
    //height:2000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:0px 145px 250px 145px;

    background-color: rebeccapurple;
`;

const SearchWordContainer = styled.div`
    width:300px;
    height:70px;
    margin-top:30px;
    margin-right: 1070px;
    background-color: red;
    display: flex;
    align-items: center;
    padding: 10px;
`;

const SearchWordText = styled.span`
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ResultText = styled.span`
   color: #787878;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left:10px;
`;

const VotingSubject=styled.div`
    width:1380px;
    //height:300px;
    margin-top:50px;
    background-color: beige;


    .votingText{
        color: #000;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-left: 15px;
    }

    .votingList{
        width:1380px;
        //height:215px;
        display: flex;
        flex-wrap: wrap;
        gap:15px;
        background-color: aqua;
        margin-top: 20px;

    }
`;  

const FundingSubject=styled.div`
    width:1380px;
    //height:300px;
    margin-top:40px;
    background-color: beige;

    .fundingText{
        color: #000;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-left: 15px;
    }

    .fundingList{
        width:1380px;
        //height:215px;
        display: flex;
        flex-wrap: wrap;
        gap: 24px 15px;
        background-color: aqua;
        margin-top: 20px;
    }
`;



//const searchWord="백엔드";

export function SearchResults(){
    //const [num,setNum]=useState(0);
    //const [searchWord, setSearchWord] = useState("");
    const navigate=useNavigate();
    const location = useLocation();
    const { subjectResults,lectureResults,searchWord} = location.state || {  subjectResults: [], lectureResults: [], searchWord:'' };
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleItemClick=(path,id)=>{
        navigate(path,{state:{id}});
    };

    useEffect(() => {
        // localStorage에서 access_token을 가져옴
        const token = localStorage.getItem('access_token');
        // 토큰이 있으면 로그인 상태로 설정
        if (token) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
    }, []);
    return(
        <ResultPage>
           {isLoggedIn ? <AfterLoginNavBar /> : <BeforeLoginNavBar/>}
           
           <SearchWordContainer>
                <SearchWordText>{searchWord}</SearchWordText>
                <ResultText>검색결과</ResultText>
           </SearchWordContainer>

           <VotingSubject>
                <div className="votingText">
                    <p>투표중인 주제</p>
                    <div className="votingList">
                        {subjectResults.map((subject, index) => (
                                <SubjectItem key={index} title={subject.name} onClick={()=>handleItemClick('/votingspecific',subject.id)} />
                            ))}
                    </div>
                </div>
           </VotingSubject>

           <FundingSubject>
                <div className='fundingText'>
                    <p>펀딩중인 주제</p>
                    <div className="fundingList">
                    {lectureResults.map((subject, index) => (
                                <SubjectItem key={index} title={subject.title} onClick={()=>handleItemClick('/votingcompletespecific',subject.id)} />
                            ))}
                    </div>
                </div>
           </FundingSubject>
        </ResultPage>
    );
}