import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import React from "react";
import styled from "styled-components";
import kakaoButtonImage from '../images/KakaoButtonImage.png';
import KakaoButton from './KakaoButton';

const NavBarPage = styled.div`
    width:1360px;
    height:130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //background-color: red;
`;

const ServiceName = styled.div`
    width:163px;
    height:38px;
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const SearchBox = styled.div`
    .find{
        display: flex;
        width: 584px;
        padding: 20px;
        align-items: center;
        gap: 10px;
        border-radius: 21px;
        background: #F5F5F5;
        border: none;
    }
`;

const LoginBtn = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: white;

    .login{
        border: none;
        background-color: white;
        cursor: pointer;
    }
`;

export function BeforeLoginNavBar(){
    const [searchWord, setSearchWord] = useState("");
    const navigate = useNavigate(); // navigate 변수 정의
    
    const handleSearchChange = (e) => {
        setSearchWord(e.target.value);
    };
    
    const handleKeyDown = (e) => {       
        if (e.key === 'Enter') {
            //handleSearch();
        }               
    };

    const handleLogin = () => {
        navigate("/login"); // navigate를 사용하여 로그인 페이지로 이동
    };
      
    return (
        <NavBarPage>
            <ServiceName>
                <p>CareerVote</p>
            </ServiceName>

            <SearchBox>
                <input 
                    type="text" 
                    className="find" 
                    value={searchWord} 
                    onChange={handleSearchChange}  
                    onKeyDown={handleKeyDown} 
                    placeholder="어떤 주제나 강의를 원하시나요?"
                />
            </SearchBox>

            <LoginBtn>
                <p className="loginButton" onClick={handleLogin}>로그인</p>
            </LoginBtn>
        </NavBarPage>
    );
}
