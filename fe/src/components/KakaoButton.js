import React from 'react';
import kakaoButtonImage from '../images/KakaoButtonImage.png';

function KakaoButton() {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  const loginHandler = () => {
    window.location.href = link;
  };
  
  return (
    <div>
        <img 
              src={kakaoButtonImage} 
              alt="카카오로 3초만에 시작하기" 
              className="kakaoButton" 
              onClick={loginHandler} 
        />
    </div>
  );
}

export default KakaoButton;
