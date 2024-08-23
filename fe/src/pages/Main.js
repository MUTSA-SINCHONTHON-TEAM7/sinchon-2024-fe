import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { SubjectItem } from "../components/SubjectItem.js"; 
import { UsersPickItem } from "../components/UsersPickItem.js";
import { AfterLoginNavBar } from "../components/AfterLoginNavBar.jsx";
import { BeforeLoginNavBar } from "../components/BeforeLoginNavBar.jsx";

const Container = styled.div`
    margin: auto;
    width: 1620px;
    height: 2000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 145px 250px 145px;
`;

const TitleContainer = styled.div`
    width: 1380px;
    height: 38px;
    margin-top: 50px;
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

const BtnContainer = styled.div`
    display: flex;
    gap: 8px;
    margin: 27px 0px 30px 0px;
    flex-wrap: wrap;
    width: 100%;
`;

const Btn = styled.button`
    background-color: ${(props) => (props.selected ? '#F5F5F5' : 'white')};
    color: ${(props) => (props.selected ? 'black' : '#787878')};
    border: ${(props) => (props.selected ? '1px solid #000' : '1px solid #AAA')};
    border-radius: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    display: flex;
    padding: 10px 14px;
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
    cursor: pointer;
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
    cursor: pointer;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px 15px;
    margin-top: 20px;
`;

const ToggleButton = styled.p`
    background-color: none;
    border: none;
    padding: 10px;
    cursor: pointer;
    color: ${(props) => (props.selected ? '#FF7134' : '#787878')};
    border-bottom: ${(props) => (props.selected ? '2px solid #FF7134' : 'none')};
    font-weight: ${(props) => (props.selected ? '700' : '400')};
`;

const ToggleWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    width: 100%;
`;

const Vote = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('IT');
    const [currentPage, setCurrentPage] = useState(0);
    const [items, setItems] = useState([]);
    const [progressSubjects, setProgressSubjects] = useState([]);
    const [completeSubjects, setCompleteSubjects] = useState([]);

    const categories = [
        'IT', '영업/고객상담', '경영/사무', '마케팅/광고', '생산/제조', 
        '연구개발/설계', '의료', '무역/유통', '건설', '전문/특수직', 
        '디자인', '미디어', '기타'
    ];

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    useEffect(() => {
        // Fetch data for /subjects/progress
        axios.get('/subjects/progress')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => console.error('Error fetching progress subjects:', error));

        // Fetch data for /subjects/complete
        axios.get('/subjects/complete')
            .then(response => {
                setCompleteSubjects(response.data);
            })
            .catch(error => console.error('Error fetching complete subjects:', error));
    }, []);

    useEffect(() => {
        // Fetch data for /subjects/progress?category=string
        axios.get(`/subjects/progress?category=${selectedCategory}`)
            .then(response => {
                setProgressSubjects(response.data);
            })
            .catch(error => console.error('Error fetching category progress subjects:', error));

        // Fetch data for /subjects/complete?category=string
        axios.get(`/subjects/complete?category=${selectedCategory}`)
            .then(response => {
                setCompleteSubjects(response.data);
            })
            .catch(error => console.error('Error fetching category complete subjects:', error));
    }, [selectedCategory]);

    const handleClick = (category) => {
        setSelectedCategory(category);
    };

    const handleToggle = (direction) => {
        if (direction === 'prev') {
            setCurrentPage(currentPage > 0 ? currentPage - 1 : 0);
        } else if (direction === 'next') {
            setCurrentPage(currentPage < 1 ? currentPage + 1 : currentPage);
        }
    };

    return (
      <Container>
        {isLoggedIn ? <AfterLoginNavBar /> : <BeforeLoginNavBar />}
        
        <TitleContainer>
            <Title>유저들의 PICK 🔥</Title>
        </TitleContainer>
        
        <ToggleWrapper>
            <ToggleButton selected={currentPage === 0} onClick={() => handleToggle('prev')}>{"투표 중인 주제"}</ToggleButton>
            <ToggleButton selected={currentPage === 1} onClick={() => handleToggle('next')}>{"펀딩 중인 주제"}</ToggleButton>
        </ToggleWrapper>

        <ItemContainer>
            {items.slice(currentPage * 3, currentPage * 3 + 3).map((item) => (
                <UsersPickItem key={item.id} imageURL="example.png" title={item.name} caption={item.subject_detail} />
            ))}
        </ItemContainer>

        {/* 투표 중인 주제 섹션 */}
        <TitleContainer>
            <Title>PICK을 기다리는 주제</Title>
        </TitleContainer>
        <BtnContainer>
            {categories.map((category) => (
                <Btn key={category} selected={selectedCategory === category} onClick={() => handleClick(category)}>{category}</Btn>
            ))}
        </BtnContainer>
        <ItemContainer>
            {progressSubjects.map((subject) => (
                <SubjectItem key={subject.id} imageURL="example.png" title={subject.name} caption={subject.subject_detail} />
            ))}
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
            {completeSubjects.map((subject) => (
                <SubjectItem key={subject.id} imageURL="example.png" title={subject.name} caption={subject.subject_detail} />
            ))}
        </ItemContainer>
        <ButtonWrapper>
            <SeeMoreBtn>더보기</SeeMoreBtn>
        </ButtonWrapper>
      </Container>
    );
};

export default Vote;
