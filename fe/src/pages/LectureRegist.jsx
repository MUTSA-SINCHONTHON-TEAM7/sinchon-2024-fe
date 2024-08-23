import styled from "styled-components";
import { AfterLoginNavBar } from "../components/AfterLoginNavBar.jsx";
import { BeforeLoginNavBar } from "../components/BeforeLoginNavBar.jsx";
import { useState, useEffect } from "react";
import { ProfileImageUpload } from "../components/ProfileImgUpload.js";
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
    gap: 50px;
`
const SubTitle = styled.div`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 110px;
    margin-right: 30px;
`
const DetailText = styled.div`
    color: #787878;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`
const Orange = styled.span`
    color: #FF7134;
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
    
    &:focus {
        outline: none;
    }
`
const IntInput = styled(TitleInput)`
    width: 320px;
    margin-left: auto;
    margin-right: 20px;
    text-align: right;
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
    
    &:focus {
        outline: none;
    }
`
const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const LectureRegist = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [image, setImage] = useState(null);
    const [ title, setTitle ] = useState('');
    const [ detail, setDetail ] = useState('');
    const [ funding, setFunding ] = useState('');
    const [ minFunding, setMinFunding ] = useState('');
    const [ maxStudent, setMaxStudent ] = useState('');

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

    /*const submit = async () => {
        const topicData = {
            name: title,
            subject_datail: detail,
            category: selectedCategory
        }

        try {
            const accessToken = localStorage.getItem('access_token');
            const response = await axiosInstance.post('/subjects', topicData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

        } catch (error) {
            console.error(error);
        }
    }*/

    return(
        <Container>
            {isLoggedIn ? <AfterLoginNavBar /> : <BeforeLoginNavBar/>}
            <BodyContainer>
                <TitleContainer>
                    <Title>강의 제안하기</Title>
                    <RegisterBtn>등록하기</RegisterBtn>
                    <CancleBtn>취소</CancleBtn>
                </TitleContainer>
                <FormContainer>
                    <ColumnContainer>
                        <SubTitle>대표사진</SubTitle>
                        <ProfileImageUpload image={image} setImage={setImage} />
                    </ColumnContainer>
                    <ColumnContainer>
                        <SubTitle>제목 <Orange>*</Orange></SubTitle>
                        <TitleInput placeholder="제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} />
                    </ColumnContainer>
                    <ColumnContainer>
                        <SubTitle>설명 <Orange>*</Orange></SubTitle>
                        <DetailInput placeholder="설명을 입력해주세요." value={detail} onChange={(e) => setDetail(e.target.value)}/>
                    </ColumnContainer>
                    <RowContainer>
                        <SubTitle>펀딩 금액 <Orange>*</Orange></SubTitle>
                        <DetailText>수강생 한 명에게 받을 인당 펀딩 금액을 설정해주세요.</DetailText>
                        <IntInput value={funding} onChange={(e) => setFunding(e.target.value)}/>
                        <DetailText>원</DetailText>
                    </RowContainer>
                    <RowContainer>
                        <SubTitle>최소 펀딩 금액 <Orange>*</Orange></SubTitle>
                        <DetailText>강의를 제공할 수 있는 최소 펀딩 금액을 설정해주세요.</DetailText>
                        <IntInput value={minFunding} onChange={(e) => setMinFunding(e.target.value)}/>
                        <DetailText>원</DetailText>
                    </RowContainer>
                    <RowContainer>
                        <SubTitle>최대 인원수</SubTitle>
                        <DetailText>강의를 수강할 수 있는 최대 인원수를 설정해주세요. <br/>
                        온라인 강의 등 상황에 따라 설정하지 않아도 돼요.</DetailText>
                        <IntInput value={maxStudent} onChange={(e) => setMaxStudent(e.target.value)}/>
                        <DetailText>명</DetailText>
                    </RowContainer>
                </FormContainer>
            </BodyContainer>
        </Container>
    )
};

export default LectureRegist;