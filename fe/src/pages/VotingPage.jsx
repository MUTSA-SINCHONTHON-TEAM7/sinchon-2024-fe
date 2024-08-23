import { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from "react";
import styled from "styled-components";
import { BeforeLoginNavBar } from '../components/BeforeLoginNavBar';
import { AfterLoginNavBar } from '../components/AfterLoginNavBar';
import { SubjectItem } from '../components/SubjectItem';
import logoBtn from "..//assets/logoBtn.png";
import { axiosInstance } from '../api';

const VotingSpecificPage=styled.div`
    margin:auto;
    width:1620px;
    //height:2000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:0px 145px 250px 145px;
    //background-color: rebeccapurple;
`;

const SpecificInfoContainor=styled.div`
    width:1380px;
    //height:800px;
    //background-color: beige ;
`;

const StatusSubject=styled.div`
    width:200px;
    height:100px;
    display:flex;
    flex-direction: row;
    align-items: center;
    //background-color: red;
    margin-top:20px;
    
    .status{
        width:110px;
        height:55px;
        display: flex;
        padding: 16px 20px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 40px;
        background: #FF7134;

        color: #FFF;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .subject{
        margin-left: 10px;
        display: flex;
        padding: 16px 20px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 40px;
        border: 1px #000;

        background: #F5F5F5;

        color: #000;

        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

const SubjectInfo=styled.div`
    width:1100px;
    height:300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //background-color:aqua;
    
    .subjectTitle{
        width:1000px;
        height:60px;
        color: #000;
        font-family: Pretendard;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;    
        margin-top: 20px;
        margin-left: 10px;
        //background-color:red;
    }

    .subjectWriterInfo{
        width:400px;
        height:28px;
        margin-left: 10px;
        //background-color: aliceblue;
    }

    .subjectText{
        width:1060px;
        height:170px;
        margin-top: 10px;
        margin-left: 10px;
        color: #000;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 175%;
        //background-color: blue;
    }
`;

const SubjectTexts=styled.div`
    width:1120px;
    height:39px;
    display:flex;
    flex-direction: row;
    //align-items: center;

    margin-top: 40px;
    margin-left: 10px;
    //background-color: orange;

    .text1{
        color: #000;
        font-family: Pretendard;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

   .textStatus{
        margin-left: 760px;
   }

`;

const VotingStatus=styled.div`
    width:1120px;
    height:100px;
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    //background-color: bisque;

    .divide{
        width:140px;
        height:40px;
        margin-top:10px;
        display: flex;
        flex-direction: row;
        
        .real{
            color: #FF7134;
            text-align: right;
            font-family: Pretendard;
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        .goal{
            color: #787878;
            text-align: right;
            font-family: Pretendard;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-top: 3px;
            margin-left: 4px;
        }


    }
    .logoBtn1{
            margin-top:5px;
            margin-left: 690px;
            width:230px;
            height: 50px;
        }
`


export function VotingPage(){
    const access_token=localStorage.getItem('access_token');
    const location = useLocation();
    const id = location.state?.selectedSubject.id || '';
    const [voteData, setVoteData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    const handleVote=async()=>{
        try{
            const newVote={
                subject_id: id
            }
            const response=await axiosInstance.post('/votes',newVote,{
                headers:{
                    Authorization: `Bearer ${access_token}`
                  }
            })
            setVoteData(response.data);
            console.log(response.data);
        }
        catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        handleVote();  
    }, []); 

    return(
        <VotingSpecificPage>
             {isLoggedIn ? <AfterLoginNavBar /> : <BeforeLoginNavBar/>}
            <SpecificInfoContainor>
                <StatusSubject>
                    <div className="subject">
                        <p>IT</p>
                    </div>
                </StatusSubject>

                <SubjectInfo>
                    <div className="subjectTitle">
                        <p>주니어 백엔드 개발자가 갖추어야 할 경험과 회사 생활 역량 </p>
                    </div>

                    <div className="subjectWriterInfo">
                        <div className="writerName">

                        </div>
                        <div className="writeDate">

                        </div>
                    </div>

                    <div className="subjectText">
                        <p>저는 개발 공부를 시작했지만 백엔드 개발자의 커리어를 어떻게 쌓아야 할지 막막합니다. 나는 프론트엔드가 맞을까? 백엔드가 맞을까? 고민도 됩니다. 채용 면접이나 개발 조직에서 살아남기 위해 필요한 역량을 알고 싶어요.또 주니어 백엔드 개발자가 갖추어야 할 실력, 그리고 취업을 하기 위해 갖추어야 할 경험도 궁금합니다. 같이 강의 듣고 취뽀해요!</p>
                    </div>
                </SubjectInfo>

                <SubjectTexts>
                    <div className="text1">
                        <p>이 주제를 <span  style={{ color: '#FF6E23' }}>pick</span> 한 사람</p>
                    </div>
                    
                    <div className="textStatus">
                        <p>펀딩까지 <span style={{ color: '#FF6E23' }}>5명</span> 남았어요</p>
                    </div>
                </SubjectTexts>

                <VotingStatus>
                    <div className="divide">
                        <p className="real">45명</p>
                        <p className="goal">/50명</p>
                    </div>

                    <img src={logoBtn} className="logoBtn1" onClick={handleVote}></img>
                </VotingStatus>
            </SpecificInfoContainor>
        </VotingSpecificPage>
        
    );
};