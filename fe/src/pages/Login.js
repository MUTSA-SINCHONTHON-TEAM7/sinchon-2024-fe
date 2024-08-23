import React, { useState } from 'react';
import '../styles/Login.css';
import kakaoButtonImage from '../images/KakaoButtonImage.png';
import KakaoButton from '../components/KakaoButton';

function Login() {

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>환영합니다!</p>
        <p1><p2>LECPICK</p2>에서는 원하는 강의 주제를 직접 제안하고<br></br>
        마음에 드는 강의를 골라 펀딩에 참여할 수 있어요.<br></br>
        함께 능동적인 구직자가 되어볼까요?<br></br>
        </p1>
        <KakaoButton className="kakaoButton"/>
      </div>
    </div>
  );
}

export default Login;
