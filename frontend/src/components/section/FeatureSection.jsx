import React from 'react';
import { MdPersonSearch, MdOutlinePriceChange } from 'react-icons/md';
import { FcInspection } from 'react-icons/fc';

function FeaturesSection() {
  return (
    <section className="flex items-center justify-center bg-white py-20 text-gray-900">
      <div className="max-w-6xl text-center">
        <h2 className="mb-20 text-3xl font-bold sm:text-4xl">Our Features</h2>

        <div className="mx-5 my-4 grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border p-6 shadow-lg">
            <div className="my-5 items-center text-center">
              <h1 className="text-3xl">사진 자리</h1>
              <MdPersonSearch />
            </div>
            <h3 className="my-4 text-2xl font-semibold">품질</h3>
            <p className="text-md">
              상품의 외관, 성능 및 완전 작동 기기만을 판매하며, 철저한 검수를
              통해 고품질 제품을 제공합니다.
            </p>
          </div>
          <div className="rounded-3xl border p-6 shadow-lg">
            <div className="my-5 items-center text-center">
              <h1 className="text-3xl">사진 자리</h1>
              <MdOutlinePriceChange />
            </div>
            <h3 className="my-4 text-2xl font-semibold">가격</h3>
            <p className="text-md">
              배송비 및 검수비를 포함하여, 중고 전자기기의 저렴한 가격을 통해
              정가보다 더더욱 할인된 가격으로 판매합니다.
            </p>
          </div>
          <div className="rounded-3xl border p-6 shadow-lg">
            <div className="my-5 items-center text-center">
              <h1 className="text-3xl">사진 자리</h1>
              <FcInspection />
            </div>
            <h3 className="my-4 text-2xl font-semibold">투명성</h3>
            <p className="text-md">
              사피에서 제공되는 엄격한 검수 기준을 적용해 각 상품에 맞게
              항목별로 평가된, 그리고 사용자분들의 의견을 수용하여 지속적인
              발전을 추구합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
