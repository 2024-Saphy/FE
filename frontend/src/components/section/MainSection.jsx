import React from 'react';

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

        <ax
          href="#download_app"
          className="rounded bg-sky-500 px-6 py-3 text-lg font-semibold text-white hover:bg-sky-600"
        >
          앱 다운로드
        </ax>
      </div>
    </section>
  );
}

export default MainSection;
