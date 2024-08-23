import styled from "styled-components";
import { AfterLoginNavBar } from "../components/AfterLoginNavBar.jsx";
import { BeforeLoginNavBar } from "../components/BeforeLoginNavBar.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/index.js";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`
const BodyContainer = styled(Container)`
    padding: 0px 325px 80px 325px;
`
const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
`
const Title = styled.div`
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const RegisterBtn = styled.button`
    display: inline-flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 11px;
    background: #FF7134;
    border: none;
    cursor: pointer;

    color: white;
    text-align: right;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px 15px 0px auto;
`
const CancleBtn = styled(RegisterBtn)`
    background: #F5F5F5;
    color: #787878;
    margin: 0px;
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px;
    margin-top: 40px;
    border-radius: 11px;
    border: 1px solid #E7E7E7;
`
const SubTitle = styled.div`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const BtnContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin: 30px 0px 50px 0px;
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
const TitleInput = styled.input`
    display: flex;
    padding: 20px;
    align-items: center;
    align-self: stretch;
    border-radius: 11px;
    border: none;
    background: #F5F5F5;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 30px 0px 50px 0px;
    
    &:focus {
        outline: none;
    }
`
const DetailInput = styled.textarea`
    display: flex;
    padding: 20px;
    height: 185px;
    align-items: center;
    align-self: stretch;
    border-radius: 11px;
    border: none;
    background: #F5F5F5;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    resize: none;
    margin-top: 30px;
    
    &:focus {
        outline: none;
    }
`

const TopicSuggest = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('IT');
    const categories = [
        'IT', '영업/고객상담', '경영/사무', '마케팅/광고', '생산/제조', 
        '연구개발/설계', '의료', '무역/유통', '건설', '전문/특수직', 
        '디자인', '미디어', '기타'
    ];

    const [ title, setTitle ] = useState('');
    const [ detail, setDetail ] = useState('');

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

    const submit = async () => {
        const topicData = {
            name: title,
            subject_detail: detail,
            category: selectedCategory
        }

        try {
            const accessToken = localStorage.getItem('access_token');
            const response = await axiosInstance.post('/subjects', topicData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            navigate('/topic');

        } catch (error) {
            console.error(error);
        }
    }
    return(
        <Container>
            {isLoggedIn ? <AfterLoginNavBar /> : <BeforeLoginNavBar/>}
            <BodyContainer>
                <TitleContainer>
                    <Title>주제 제안하기</Title>
                    <RegisterBtn onClick={submit}>등록하기</RegisterBtn>
                    <CancleBtn onClick={() => { navigate('/topic'); }}>취소</CancleBtn>
                </TitleContainer>
                <FormContainer>
                    <SubTitle>카테고리</SubTitle>
                    <BtnContainer>
                        {categories.map((category) => (
                            <Btn key={category} selected={selectedCategory === category} onClick={() => handleClick(category)}>{category}</Btn>
                        ))}
                    </BtnContainer>
                    <SubTitle>제목</SubTitle>
                    <TitleInput placeholder="제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} />
                    <SubTitle>설명 </SubTitle>
                    <DetailInput placeholder="설명을 입력해주세요." value={detail} onChange={(e) => setDetail(e.target.value)}/>
                </FormContainer>
            </BodyContainer>
        </Container>
    )
};

export default TopicSuggest;