import styled from "styled-components";
import { AfterLoginNavBar } from "../components/AfterLoginNavBar.jsx";
import { BeforeLoginNavBar } from "../components/BeforeLoginNavBar.jsx";
import { SubjectItem } from "../components/SubjectItem.js"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from "../api/index.js";

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
    background: #FF7134;
    color: white;
    cursor: pointer;
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
    cursor: pointer;
`
const ItemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    gap: 24px 15px;
`;
const Vote = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [subjects, setSubjects] = useState([]); // 가져온 데이터를 저장할 상태
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

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const params = selectedCategory ? { category: selectedCategory } : {};
                const response = await axiosInstance.get('/subjects/progress', { params });
                setSubjects(response.data); // 가져온 데이터를 상태에 저장
            } catch (error) {
                console.error('Error fetching subjects:', error);
            }
        };

        fetchSubjects();
    }, [selectedCategory]); // selectedCategory가 변경될 때마다 요청을 보냄
  
    return (
      <Container>
        {isLoggedIn ? <AfterLoginNavBar /> : <BeforeLoginNavBar/>}
        <TitleContainer>
            <Title>투표 중인 주제</Title>
            <SuggestBtn onClick={() => { navigate('/topic-suggest'); }}>주제 제안하기</SuggestBtn>
        </TitleContainer>
        <BtnContainer>
            {categories.map((category) => (
                <Btn key={category} selected={selectedCategory === category} onClick={() => handleClick(category)}>{category}</Btn>
            ))}
        </BtnContainer>
        <ItemContainer>
        {subjects.map((subject) => {
                const remainingVotes = 50 - subject.vote;
                const overlayText = remainingVotes < 5 ? `펀딩까지 ${remainingVotes}명 남았어요` : null;

                return (
                    <SubjectItem
                        key={subject.id}
                        imageURL="example.png"
                        title={subject.name}
                        overlayText={overlayText}
                        onClick={() => { navigate('/votingspecific'); }}
                    />
                );
            })}
        </ItemContainer>
      </Container>
    );
};
  
export default Vote;