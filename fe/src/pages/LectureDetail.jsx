import styled from "styled-components";
import { AfterLoginNavBar } from "../components/AfterLoginNavBar.jsx";
import { BeforeLoginNavBar } from "../components/BeforeLoginNavBar.jsx";
import { useState, useEffect } from "react";
import { axiosInstance } from "../api/index.js";
import { useParams } from 'react-router-dom'; // useParams 훅을 import

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 0px 145px 250px 145px;
`

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
    margin-top: 20px;
`

const LectureImg = styled.img`
    width: 600px;
    height: 370px;
    border-radius: 21px;
    background: #EBEBEB;
`
const Title = styled.div`
    width: 600px;
    color: #000;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 14px;
    margin-top: 30px;
`
const DetailText = styled.div`
    width: 600px;
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
`
const Category = styled.div`
    display: inline-flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    border: 1px solid #000;
    background: #F5F5F5;
    max-width: fit-content;
`;

const ProgressContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 30px;
    margin-bottom: 20px;
`
const FundingBtn = styled.button`
    display: flex;
    width: 600px;
    height: 55px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 11px;
    background: #FF7134;
    color: #FFF;
    text-align: right;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    cursor: pointer;
`
const CurrentPeople = styled.div`
    color: #FF7134;
    text-align: right;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const TotalPeople = styled.div`
    color: #787878;
    text-align: right;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const RemainPeople = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: auto;
`
const Orange = styled.span`
    color: #FF7134;
`
const LectureDetail = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { lectureId } = useParams(); // useParams를 사용하여 lectureId를 가져옴
    const [lectureData, setLectureData] = useState(null); // 강의 데이터를 저장할 상태

    useEffect(() => {
        // lectureId를 이용하여 API 요청을 보냄
        const fetchLectureDetails = async () => {
            try {
                const response = await axiosInstance.get(`/lectures/${lectureId}`);
                setLectureData(response.data); // 받아온 데이터를 상태에 저장
            } catch (error) {
                console.error('Error fetching lecture details:', error);
            }
        };

        if (lectureId) {
            fetchLectureDetails();
        }
    }, [lectureId]);
    
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

    const totalPeople = Math.ceil(lectureData.min_total_cost / lectureData.cost)

    return(
        <Container>
            {isLoggedIn ? <AfterLoginNavBar /> : <BeforeLoginNavBar/>}
            <RowContainer>
                <ColumnContainer>
                    <LectureImg/>
                    <Title>강의 소개</Title>
                    <DetailText>
                    {lectureData.lecture_detail}
                    </DetailText>
                </ColumnContainer>
                <ColumnContainer>
                    <Category>{lectureData.category}</Category>
                    <Title>{lectureData.title}</Title>
                    <DetailText>username</DetailText>
                    <ProgressContainer>
                        <CurrentPeople>{lectureData.funding_count}</CurrentPeople>
                        <TotalPeople> / {totalPeople}명</TotalPeople>
                        <RemainPeople>개설까지 <Orange>{totalPeople - lectureData.funding_count}명 </Orange>남았어요.</RemainPeople>
                    </ProgressContainer>
                    <FundingBtn>{lectureData.cost} 캐시 펀딩하기</FundingBtn>
                </ColumnContainer>
            </RowContainer>
        </Container>
    );
};

export default LectureDetail;