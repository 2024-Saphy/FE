import React from 'react';

function AboutSection() {
  return (
    <section className="flex items-center justify-center bg-gray-100 py-20 text-gray-900">
      <div className="relative">
        <h1 className="text-center text-4xl text-red-600">사진 자리</h1>
        <div className="max-10 3xl mt-20 text-left">
          <h2 className="mb-10 text-3xl font-bold sm:text-4xl">About Saphy</h2>
          <p className="text-md whitespace-pre-line">
            사피/Saphy는 무엇을 하는 곳인가요?
            <br />
            <br /> 사피/Saphy는 중고 전자기기 수리 및 판매를 주선하는 마켓
            플레이스입니다. <br />
            사용자 분들에게 신뢰를 드리기 위한, 그리고 상품의 품질을 위한
            일환으로써, <br />
            저희 플랫폼에 등록된 판매자는 사피의 엄격한 검수과정에 의거한 품질
            기준을 통과한 상품들을 구매자분들께 제공합니다.
            <br />
            <br /> 이 외의 Sahpy에 관한 자세한 내용은 FAQ 내용을 참고해주시길
            부탁드립니다.
            <br />
            <br />
            사피는 판매자, 구매자 분들에게 최적의 상품, 검수 과정의 안정성,
            신뢰성 및 품질에 관해 최선의 서비스를 제공드리고자 합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
