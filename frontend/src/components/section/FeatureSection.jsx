import React, { useEffect } from 'react';
import { MdPersonSearch, MdOutlinePriceChange } from 'react-icons/md';
import { FcInspection } from 'react-icons/fc';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import iphonesFourImage from '../../assets/iphones_four.jpg';

function FeaturesSection() {
  const controlImage = useAnimation();
  const controlText = useAnimation();
  const [refImage, inViewImage] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [refText, inViewText] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: custom * 0.5 },
    }),
  };

  useEffect(() => {
    if (inViewImage) {
      controlImage.start({ opacity: 1, transition: { duration: 1 } });
    } else {
      controlImage.start({ opacity: 0, transition: { duration: 1 } });
    }
  }, [controlImage, inViewImage]);

  useEffect(() => {
    if (inViewText) {
      controlText.start({ opacity: 1, x: 0, transition: { duration: 1 } });
    } else {
      controlText.start({ opacity: 0, x: -50, transition: { duration: 1 } });
    }
  }, [controlText, inViewText]);

  return (
    <section className="flex items-center justify-center bg-white py-20 text-gray-900">
      <div className="relative text-center">
        <div className="my-10 flex justify-center">
          <motion.img
            ref={refImage}
            src={iphonesFourImage}
            alt="iPhones"
            className="mb-5 w-full max-w-2xl md:max-w-xl"
            initial={{ opacity: 0 }}
            animate={controlImage}
          />
        </div>
        <motion.div
          ref={refText}
          className="mx-auto my-20 px-20 text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={controlText}
        >
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Our Features</h2>
          <p className="text-md">SAPHY가 가진 특징 요소들을 소개드립니다.</p>
        </motion.div>
        <div className="mx-auto mb-10 grid max-w-[90%] grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="rounded-3xl border p-6 shadow-lg"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            custom={0}
            threshold={0.7}
          >
            <div className="my-5 flex items-center justify-center text-center">
              <MdPersonSearch className="text-8xl" />
            </div>
            <h3 className="my-4 text-2xl font-semibold">품질</h3>
            <p className="text-md">
              상품의 외관, 성능 및 완전 작동 기기만을 판매하며, 철저한 검수를
              통해 고품질 제품을 제공합니다.
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl border p-6 shadow-lg"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            custom={1}
            threshold={0.8}
          >
            <div className="my-5 flex items-center justify-center text-center">
              <MdOutlinePriceChange className="text-8xl" />
            </div>
            <h3 className="my-4 text-2xl font-semibold">가격</h3>
            <p className="text-md">
              배송비 및 검수비를 포함하여, 중고 전자기기의 저렴한 가격을 통해
              정가보다 더더욱 할인된 가격으로 판매합니다.
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl border p-6 shadow-lg"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            custom={2}
            threshold={0.9}
          >
            <div className="my-5 flex items-center justify-center text-center">
              <FcInspection className="text-8xl" />
            </div>
            <h3 className="my-4 text-2xl font-semibold">투명성</h3>
            <p className="text-md">
              사피에서 제공되는 엄격한 검수 기준을 적용해 각 상품에 맞게
              항목별로 평가된, 그리고 사용자분들의 의견을 수용하여 지속적인
              발전을 추구합니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
