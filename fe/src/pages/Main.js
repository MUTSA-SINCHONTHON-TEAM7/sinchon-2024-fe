import styled from "styled-components";
import { useEffect, useState } from "react";
import { SubjectItem } from "../components/SubjectItem.js"; // SubjectItem 컴포넌트는 외부에 구현되어 있다고 가정합니다.
import { UsersPickItem } from "../components/UsersPickItem.js";
import { AfterLoginNavBar } from "../components/AfterLoginNavBar.jsx";
import { BeforeLoginNavBar } from "../components/BeforeLoginNavBar.jsx";

// 상위 컨테이너
const Container = styled.div`
    margin:auto;
    width:1620px;
    height:2000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:0px 145px 250px 145px;

    background-color: rebeccapurple;
`;

// 타이틀 컨테이너
const TitleContainer = styled.div`
    width:1380px;
    height:38px;
    margin-top:50px;
    background-color: beige;
`;

const Title = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    background-color: beige;
`;

// 버튼 컨테이너 (카테고리 버튼)
const BtnContainer = styled.div`
    display: flex;
    gap: 16px;
    margin: 27px 0px 30px 0px;
    flex-wrap: wrap;
`;

const Btn = styled.button`
    background-color: ${(props) => (props.selected ? '#F5F5F5' : 'white')};
    color: ${(props) => (props.selected ? 'black' : '#787878')};
    border: ${(props) => (props.selected ? '1px solid #000' : '1px solid #AAA')};
    border-radius: 40px;
    font-size: 15px;
    font-weight: 400;
    line-height: normal;
    display: flex;
    padding: 13px 16px;
    justify-content: center;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
`;

const ProposeBtn = styled.button`
display: inline-flex;
padding: 16px 20px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 11px;
background: #FF7134;

color: #FFF;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const SeeMoreBtn = styled.button`
display: inline-flex;
padding: 16px 20px;
align-items: center;
gap: 10px;

border-radius: 11px;
background: #F5F5F5;

color: #787878;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px 15px;

    margin-top: 20px;
`;

const Vote = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('IT');
    const categories = [
        'IT', '영업/고객상담', '경영/사무', '마케팅/광고', '생산/제조', 
        '연구개발/설계', '의료', '무역/유통', '건설', '전문/특수직', 
        '디자인', '미디어', '기타'
    ];

    const handleClick = (category) => {
        setSelectedCategory(category);
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

    return (
      <Container>
        {isLoggedIn ? <AfterLoginNavBar /> : <BeforeLoginNavBar/>}
        
        <TitleContainer>
            <Title>유저들의 PICK 🔥</Title>
        </TitleContainer>
        <ItemContainer>
            <UsersPickItem imageURL="example.png" title="Title" caption="Caption" />
            <UsersPickItem imageURL="example.png" title="Title" caption="Caption" />
            <UsersPickItem imageURL="example.png" title="Title" caption="Caption" />
        </ItemContainer>

        {/* 투표 중인 주제 섹션 */}
        <TitleContainer>
            <Title>투표 중인 주제</Title>
        </TitleContainer>
        <BtnContainer>
            {categories.map((category) => (
                <Btn key={category} selected={selectedCategory === category} onClick={() => handleClick(category)}>{category}</Btn>
            ))}
        </BtnContainer>
        <ItemContainer>
            <SubjectItem imageURL="example.png" title="네이버 출신 CTO가 말하는 <백엔드 개발자 커리어의 정석>" />
            <SubjectItem imageURL="example.png" title="주니어 백엔드 개발자가 갖추어야 할 경력과 회사 생활 매뉴얼" />
            <SubjectItem imageURL="example.png" title="네이버 출신 CTO가 말하는 <백엔드 개발자 커리어의 정석>" />
            <SubjectItem imageURL="example.png" title="네이버 출신 CTO가 말하는 <백엔드 개발자 커리어의 정석>" />
        </ItemContainer>
        <ButtonWrapper>
            <ProposeBtn>주제 제안하기</ProposeBtn>
            <SeeMoreBtn>더보기</SeeMoreBtn>
        </ButtonWrapper>

        {/* 펀딩 중인 주제 섹션 */}
        <TitleContainer>
            <Title>펀딩 중인 주제</Title>
        </TitleContainer>
        <BtnContainer>
            {categories.map((category) => (
                <Btn key={category} selected={selectedCategory === category} onClick={() => handleClick(category)}>{category}</Btn>
            ))}
        </BtnContainer>
        <ItemContainer>
            <SubjectItem imageURL="example.png" title="네이버 출신 CTO가 말하는 <백엔드 개발자 커리어의 정석>" />
            <SubjectItem imageURL="example.png" title="네이버 출신 CTO가 말하는 <백엔드 개발자 커리어의 정석>" />
            <SubjectItem imageURL="example.png" title="네이버 출신 CTO가 말하는 <백엔드 개발자 커리어의 정석>" />
            <SubjectItem imageURL="example.png" title="네이버 출신 CTO가 말하는 <백엔드 개발자 커리어의 정석>" />
        </ItemContainer>
        <ButtonWrapper>
            <SeeMoreBtn>더보기</SeeMoreBtn>
        </ButtonWrapper>
      </Container>
    );
};

export default Vote;
