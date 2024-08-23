import { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from "react";
import styled from "styled-components";
import logo from "..//assets/LogoPic.png";
import { axiosInstance } from '../api';


const NavBarPage=styled.div`
    width:1360px;
    height:130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //background-color: red;
`;

const ServiceName=styled.div`
    width:163px;
    height:38px;
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const SearchBox=styled.div`

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

const BtnBars=styled.div`
    width:180px;
    height:50px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MyPageBtn=styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: white;

    .mypage{
        border: none;
        background-color: white;
        cursor: pointer;
    }
`;

const LogOutBtn=styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: white;

    .logout{
        border: none;
        background-color: white;
        cursor: pointer;
        margin-left: 15px;
    }
`;

export function AfterLoginNavBar(){
    const [searchWord,setSearchWord]=useState("");
    const navigate=useNavigate();

    const handleSearchChange=(e)=>{
        setSearchWord(e.target.value);
    };

    const handleSearch=async()=>{
        try{
            const response=await axiosInstance.get('/search',{
                params:{
                    search:searchWord
                }
            });
            
            const subjectResults = response.data[0].map(doc => ({
                id:doc.id,
                name:doc.name,
                category:doc.category
            }));

            const lectureResults=response.data[1].map(doc => ({
                id:doc.id,
                title:doc.title,
                category:doc.category
            }));
            navigate("/searchresult", { state: { subjectResults,lectureResults, searchWord } }); 
            console.log(response.data);


        }
        catch(e){
            console.log(e);
        }
    }
    
    const handleKeyDown = (e) => {       //책 검색 후 엔터버튼을 눌렀을때 책 검색이 이루어지도록 -> 돋보기 표시 클릭했을때와 같은 기능
        if (e.key === 'Enter') {
            handleSearch();
        }               
    };

    const handleLogout = async () => {
        try {
          localStorage.removeItem('access_token');
          alert('로그아웃에 성공했습니다');
          window.location.href = '/';
        } catch (error) {
          // 오류 처리
          console.error('Logout error:', error);
          alert('Logout failed: an error occurred.', error);
        }
      };

    return(
        <NavBarPage>
            <ServiceName>
                <img src={logo} className="logoPic"></img>
                <p>LECPICK</p>
            </ServiceName>

            <SearchBox>
                <input type="text" className="find" value={searchWord} onChange={handleSearchChange}  onKeyDown={handleKeyDown} placeholder="어떤 주제나 강의를 원하시나요?"></input>
            </SearchBox>

            <BtnBars>
                <MyPageBtn>
                    <button className='mypage'>마이페이지</button>
                </MyPageBtn>
                <LogOutBtn>
                    <button className='logout' onClick={handleLogout}>로그아웃</button>
                </LogOutBtn>
            </BtnBars>
            
        </NavBarPage>

    );
}