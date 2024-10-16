import React from 'react';
import './MainSection.css';
import appstoreDownload from '../../assets/appstore_download.png';
import playstoreDownload from '../../assets/playstore_download.png';
// import TypingEffect from '../../hooks/TypingEffect';

function MainSection() {
  return (
    <section className="animated-background mt-10 flex h-auto min-h-[60vh] items-center justify-center text-white">
      <div className="text-center">
        <h1 className="mb-4 animate-fadein text-4xl font-bold sm:text-5xl lg:text-6xl">
          Welcome to Saphy
        </h1>
        <p className="mb-8 animate-fadeinDelay1 text-lg opacity-0 sm:text-xl lg:text-2xl">
          중고 전자기기 거래 마켓플레이스 Saphy 에 오신 것을 환영합니다.
          {/*
          <TypingEffect text="중고 전자기기 거래 마켓플레이스 Saphy 에 오신 것을 환영합니다." />
          */}
        </p>

        <div className="flex animate-fadeinDelay2 justify-center space-x-4 opacity-0">
          <a href="https://play.google.com/store/">
            <img
              src={playstoreDownload}
              alt="Play Store Download"
              className="h-12 w-auto"
            />
          </a>
          <a href="https://www.apple.com/kr/app-store/">
            <img
              src={appstoreDownload}
              alt="App Store Download"
              className="h-12 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
