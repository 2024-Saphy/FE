import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import iphonesImage from '../../assets/iphones.png';

function AboutSection() {
  const controlImage = useAnimation();
  const controlTitle = useAnimation();
  const controlText = useAnimation();

  const [refImage, inViewImage] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [refText, inViewText] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // 페이지가 처음 로드되거나 새로고침될 때 스크롤을 맨 위로 이동
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0); // 새로고침 시 스크롤을 맨 위로 이동
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // 클린업: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (inViewImage) {
        controlImage.start({ opacity: 1, scale: 1 });
      }
      if (inViewText) {
        controlTitle.start({ opacity: 1, x: 0 });
        controlText.start({ opacity: 1, x: 0 });
      }
    }
  }, [controlImage, controlTitle, controlText, inViewImage, inViewText]);

  return (
    <section className="flex items-center justify-center bg-gray-100 py-20 text-gray-900">
      <div className="relative text-center">
        <motion.img
          ref={refImage} // 요소가 화면에 들어왔는지 감지할 수 있도록 ref 추가
          src={iphonesImage}
          alt="iPhones"
          className="mx-auto h-auto w-2/5"
          initial={{ opacity: 0, scale: 0.8 }} // 처음 시작 상태
          animate={controlImage} // 애니메이션 제어
          transition={{ duration: 0.8 }} // 애니메이션 속도
        />

        <div className="mx-auto mt-20 max-w-[90%] text-left">
          <motion.h2
            ref={refText}
            className="mb-10 text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, x: -50 }}
            animate={controlTitle}
            transition={{ duration: 0.8 }}
          >
            About Saphy
          </motion.h2>

          <motion.p
            className="text-md whitespace-pre-line"
            initial={{ opacity: 0, x: -50 }}
            animate={controlText}
            transition={{ duration: 0.8, delay: 0.3 }} // 딜레이 추가
          >
            사피/Saphy는 무엇을 하는 곳인가요?
            <br />
            <br /> 사피/Saphy는 중고 전자기기 수리 및 판매를 주선하는 마켓
            플레이스입니다. <br />
            사용자 분들에게 신뢰를 드리기 위한, 그리고 상품의 품질을 위한
            일환으로써, <br />
            저희 플랫폼에 등록된 판매자는 사피의 엄격한 검수과정에 의거한 <br />
            품질 기준을 통과한 상품들을 구매자분들께 제공합니다.
            <br />
            {/* <br /> 이 외의 Sahpy에 관한 자세한 내용은 FAQ 내용을 참고해주시길
            부탁드립니다.
            <br /> */}
            <br />
            사피는 판매자, 구매자 분들에게 최적의 상품, 검수 과정의 안정성,
            신뢰성 및 품질에 관해 최선의 서비스를 제공드리고자 합니다.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
