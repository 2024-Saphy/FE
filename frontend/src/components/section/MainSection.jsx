import React from 'react';
import appstoreDownload from '../../assets/appstore_download.png'; // 이미지 경로
import playstoreDownload from '../../assets/playstore_download.png'; // 이미지 경로

function MainSection() {
  return (
    <section className="mt-10 flex h-auto min-h-[60vh] items-center justify-center bg-white text-black">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
          Welcome to Saphy
        </h1>
        <p className="mb-8 text-lg sm:text-xl lg:text-2xl">
          중고 전자기기 거래 마켓플레이스 Saphy 에 오신 것을 환영합니다.
        </p>

        <div className="flex justify-center space-x-4">
          <a href="#download_app">
            <img
              src={appstoreDownload}
              alt="App Store Download"
              className="h-12 w-auto"
            />
          </a>
          <a href="#download_app">
            <img
              src={playstoreDownload}
              alt="Play Store Download"
              className="h-12 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
