import React from 'react';

function ErrorPage() {
  return (
    <main className="flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-black">에러가 발생했습니다</h1>
        <h2 className="text-lg text-black">페이지를 찾을 수 없습니다.</h2>
      </div>
    </main>
  );
}

export default ErrorPage;
