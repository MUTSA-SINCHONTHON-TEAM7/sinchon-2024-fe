import { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from "react";
import styled from "styled-components";
import { BeforeLoginNavBar } from '../components/BeforeLoginNavBar';
import { SubjectItem } from '../components/SubjectItem';
import { axiosInstance } from '../api';

const VoteCompleteSpecificPage=styled.div`
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
    background-color: beige ;
`;

const StatusSubject=styled.div`
    width:200px;
    height:100px;
    display:flex;
    flex-direction: row;
    align-items: center;
    background-color: red;
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
    background-color:aqua;
    
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
        background-color:red;
    }

    .subjectWriterInfo{
        width:400px;
        height:28px;
        margin-left: 10px;
        background-color: aliceblue;
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
        background-color: blue;
    }
`;

const SubjectFunding=styled.div`
    width:1120px;
    height:60px;
    display:flex;
    flex-direction: row;
    //align-items: center;

    margin-top: 40px;
    margin-left: 10px;
    background-color: orange;

    .fundingText{
        color: #000;
        font-family: Pretendard;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .lectSuggestBtn{
        width:130px;
        height:50px;
        margin-left: 715px;
        display: inline-flex;
        padding: 16px 20px;
        justify-content: center;
        align-items: center;
        border-radius: 11px;
        background: #FF7134;
        gap: 10px;
        color: #FFF;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border:none;
    }

`;

const LectureList=styled.div`
    width:1100px;
    //height:330px;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px 15px;
    background-color: blue;
`;
export function VoteCompletePage(){
    const navigate=useNavigate();
    return(
        <VoteCompleteSpecificPage>
            <BeforeLoginNavBar/>
            <SpecificInfoContainor>
                <StatusSubject>
                    <div className="status">
                        <p>펀딩 확정</p>
                    </div>
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
                        안녕하세요
                    </div>
                </SubjectInfo>

                <SubjectFunding>
                    <div className="fundingText">
                        <p>펀딩중인 강의</p>
                    </div>

                    <button className="lectSuggestBtn" onClick={()=>navigate("/lecture-regist")}>
                        강의 제안하기
                    </button>
                </SubjectFunding>

                <LectureList>
                    <SubjectItem title="펀딩제목"/>
                    <SubjectItem title="펀딩제목"/>
                    <SubjectItem title="펀딩제목"/>
                    <SubjectItem title="펀딩제목"/>
                </LectureList>
            </SpecificInfoContainor>
        </VoteCompleteSpecificPage>
        
    );
};