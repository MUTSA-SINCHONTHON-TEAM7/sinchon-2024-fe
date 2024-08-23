import styled from "styled-components";
import { AfterLoginNavBar } from "../components/AfterLoginNavBar.jsx";
import { BeforeLoginNavBar } from "../components/BeforeLoginNavBar.jsx";
import { SubjectItem } from "../components/SubjectItem.js"
import { useEffect, useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 0px 145px 250px 145px;
`
const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`
const Title = styled.div`
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const SuggestBtn = styled.div`
    display: inline-flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 11px;
    background: #000;
    color: white;
`
const BtnContainer = styled.div`
    display: flex;
    gap: 16px;
    margin: 27px 0px 30px 0px;
`
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
`
const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px 15px;
`
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
            <Title>투표 중인 주제</Title>
            <SuggestBtn>주제 제안하기</SuggestBtn>
        </TitleContainer>
        <BtnContainer>
            {categories.map((category) => (
                <Btn key={category} selected={selectedCategory === category} onClick={() => handleClick(category)}>{category}</Btn>
            ))}
        </BtnContainer>
        <ItemContainer>
            <SubjectItem imageURL="example.png" title="강의 투표 제목"/>
            <SubjectItem imageURL="example.png" title="강의 투표 제목"/>
            <SubjectItem imageURL="example.png" title="강의 투표 제목"/>
            <SubjectItem imageURL="example.png" title="강의 투표 제목"/>
            <SubjectItem imageURL="example.png" title="강의 투표 제목"/>
            <SubjectItem imageURL="example.png" title="강의 투표 제목"/>
            <SubjectItem imageURL="example.png" title="강의 투표 제목"/>
            <SubjectItem imageURL="example.png" title="강의 투표 제목"/>
            <SubjectItem imageURL="example.png" title="강의 투표 제목"/>
            <SubjectItem imageURL="example.png" title="강의 투표 제목"/>
        </ItemContainer>
      </Container>
    );
};
  
export default Vote;