import React from 'react';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';

function Footer() {
  const emailAddress = 'your-email@example.com';

  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <footer className="bottom-0 z-10 flex h-auto w-full items-center bg-gray-900 px-56 py-10 text-white">
      <div className="grid w-full grid-cols-3">
        <div className="flex items-center justify-start gap-10">
          <a
            href="https://github.com/2024-Saphy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="github"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="youtube"
          >
            <FaYoutube size={40} />
          </a>
          <a
            href="https://www.instagram.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="instagram"
          >
            <IoLogoInstagram size={40} />
          </a>
        </div>

        <div className="flex items-center justify-center">
          <p className="font-gmarketbold text-xl">SAPHY!</p>
        </div>

        <div className="flex flex-col items-center justify-end gap-1">
          <p className="font-gmarketbold text-lg">Saphy</p>
          <p className="text-sm">상상기업 프로젝트</p>
          <p className="text-sm">
            문의: &nbsp;
            <a
              className="underline hover:text-sky-500"
              href={`mailto:${emailAddress}`}
            >
              {emailAddress}
            </a>
          </p>

          <p className="text-sm">Copyright &copy; {thisYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
