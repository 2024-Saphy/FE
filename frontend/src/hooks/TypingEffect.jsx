import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TypingEffect({ text, typingSpeed }) {
  const [displayedText, setDisplayedText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < text.length) {
        setDisplayedText((prev) => prev + text[count]);
        setCount((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [count, text, typingSpeed]);

  return (
    <span className="animate-typingCursor border-r-2 border-white">
      {displayedText}
    </span>
  );
}

// PropTypes 정의
TypingEffect.propTypes = {
  text: PropTypes.string.isRequired, // 'text'는 필수 문자열 prop
  typingSpeed: PropTypes.number, // 'typingSpeed'는 선택적 숫자 prop
};

// 기본값 설정
TypingEffect.defaultProps = {
  typingSpeed: 50, // 기본 타이핑 속도
};

export default TypingEffect;
