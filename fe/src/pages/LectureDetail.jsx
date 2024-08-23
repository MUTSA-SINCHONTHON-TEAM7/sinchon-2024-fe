import styled from "styled-components";
import { AfterLoginNavBar } from "../components/AfterLoginNavBar.jsx";
import { BeforeLoginNavBar } from "../components/BeforeLoginNavBar.jsx";
import { useState, useEffect } from "react";

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
    height: 50px;
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
        <Container>
            {isLoggedIn ? <AfterLoginNavBar /> : <BeforeLoginNavBar/>}
            <RowContainer>
                <ColumnContainer>
                    <LectureImg/>
                    <Title>강의 소개</Title>
                    <DetailText>
                    개발 공부를 시작하고도 갈피를 못 잡는 분들, 백엔드 개발자의 커리어를 어떻게 쌓아야 할지 막막한 분들, 나는 프론트엔드가 맞을까? 백엔드가 맞을까? 고민이신 분들이라면 모두 주목해주세요.
                    네이버에서 커리어를 시작해 현재 스타트업을 거쳐 대기업의 CTO가 되기까지. 다수의 채용 면접을 진행하고 개발 조직을 이끌면서 느꼈던 경험과 지식을 체계적으로 정리하여 전달합니다. 주니어 백엔드 개발자가 갖추어야 할 실력, 그리고 취업을 하기 위해 갖추어야 할 경험, 그리고 회사 생활에 필요한 역량까지 클래스에 모두 담았습니다.
                    </DetailText>
                </ColumnContainer>
                <ColumnContainer>
                    <Category>IT</Category>
                    <Title>네이버 출신 CTO가 말하는 백엔드 개발자 커리어의 정석</Title>
                    <DetailText>username</DetailText>
                    <ProgressContainer>
                        <CurrentPeople>50,000원</CurrentPeople>
                        <TotalPeople> / 200,000원</TotalPeople>
                        <RemainPeople>개설까지 <Orange>150,000원 </Orange>남았어요.</RemainPeople>
                    </ProgressContainer>
                    <FundingBtn>펀딩하기</FundingBtn>
                </ColumnContainer>
            </RowContainer>
        </Container>
    );
};

export default LectureDetail;