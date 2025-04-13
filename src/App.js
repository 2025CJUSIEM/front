import React, { useState } from 'react'; // useState를 추가
import './App.css';

const SiemStealerPage = () => {
  // 메뉴 항목 상태 (나중에 활성화할 기능들)
  const [activeMenu, setActiveMenu] = useState(null);

  // 아이콘 컴포넌트들
  const LockIcon = () => (
    <div className="icon-container">
      <svg viewBox="0 0 24 24" className="security-icon">
        <path fill="white" d="M18,8H17V6A5,5,0,0,0,7,6V8H6a2,2,0,0,0-2,2V20a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V10A2,2,0,0,0,18,8ZM9,6a3,3,0,0,1,6,0V8H9Zm9,14H6V10H18Zm-6-3a2,2,0,1,0-2-2A2,2,0,0,0,12,17Z" />
      </svg>
    </div>
  );

  const ShieldIcon = () => (
    <div className="icon-container">
      <svg viewBox="0 0 24 24" className="security-icon">
        <path fill="white" d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1L12,1z M12,11.99h7c-0.53,4.12-3.28,7.79-7,8.94V12H5V6.3l7-3.11V12z" />
      </svg>
    </div>
  );

  const MenuIcon = () => (
    <div className="icon-container">
      <svg viewBox="0 0 24 24" className="security-icon">
        <path fill="white" d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z" />
      </svg>
    </div>
  );

  const KeyIcon = () => (
    <div className="icon-container">
      <svg viewBox="0 0 24 24" className="security-icon">
        <path fill="white" d="M7,14A2,2,0,1,1,9,16,2,2,0,0,1,7,14Zm14.71,4.29-5.84-5.84a7,7,0,1,0-1.41,1.41L16,15.42V18h3v3h3V19.41l0.29-.29A1,1,0,0,0,21.71,18.29ZM7,20a5,5,0,1,1,5-5A5,5,0,0,1,7,20Z" />
      </svg>
    </div>
  );

  const MobileSecurityIcon = () => (
    <div className="icon-container">
      <svg viewBox="0 0 24 24" className="security-icon">
        <path fill="white" d="M17,1H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V3A2,2,0,0,0,17,1ZM17,19H7V5H17Zm-1-9H13V8h3Zm-5,0H8V8h3Zm5,4H13V12h3Zm-5,0H8V12h3Z" />
        <circle fill="white" cx="12" cy="17" r="1" />
      </svg>
      <svg viewBox="0 0 24 24" className="checkmark">
        <path fill="#ff7f5c" d="M9,16.17L4.83,12l-1.42,1.41L9,19L21,7l-1.41-1.41L9,16.17z" />
      </svg>
    </div>
  );

  const EyeIcon = () => (
    <div className="icon-container">
      <svg viewBox="0 0 24 24" className="security-icon">
        <path fill="white" d="M12,4C4,4,1,12,1,12s3,8,11,8s11-8,11-8S20,4,12,4z M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18z M12,8c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S14.2,8,12,8z" />
      </svg>
    </div>
  );

  const TwoFactorIcon = () => (
    <div className="icon-container">
      <svg viewBox="0 0 24 24" className="security-icon">
        <path fill="white" d="M2,7h4v10H2V7z M7,19h15V5H7V19z M14,8h2v2h-2V8z M10,8h2v2h-2V8z M10,12h2v2h-2V12z M14,12h2v2h-2V12z" />
        <text x="12" y="14" fontSize="6" textAnchor="middle" fill="white">2FA</text>
      </svg>
    </div>
  );

  return (
    <div className="siem-stealer-page">
      {/* 헤더 부분 */}
      <header className="header">
        <div className="logo">
          <img 
            src="https://i.ibb.co/sdjgwvvv/siem-stealer.jpg" 
            alt="Siem Stealer Logo" 
            className="logo-image"
          />
        </div>
        <nav className="main-nav">
          <ul>
            <li onClick={() => setActiveMenu('company')}>회사 소개</li>
            <li onClick={() => setActiveMenu('notice')}>공지사항</li>
            <li onClick={() => setActiveMenu('customer')}>고객센터</li>
            <li onClick={() => setActiveMenu('faq')}>자주 묻는 질문</li>
          </ul>
        </nav>
        <div className="login-button" onClick={() => setActiveMenu('login')}>
          로그인
        </div>
      </header>

      {/* 메인 섹션 */}
      <main className="main-content">
        <div className="security-icons-container">
          <div className="icon-row">
            <LockIcon />
            <ShieldIcon />
            <MenuIcon />
          </div>
          
          <div className="korean-text-container">
            <h1 className="main-title">최고의 보안 인프라</h1>
            <h2 className="sub-title">Siem Stealer에서</h2>
            <h3 className="additional-text">쉽고 간편하게</h3>
          </div>
          
          <div className="icon-row">
            <KeyIcon />
            <MobileSecurityIcon />
            <EyeIcon />
            <TwoFactorIcon />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SiemStealerPage;