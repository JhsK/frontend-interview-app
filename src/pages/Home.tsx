import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout noNav>
      <div className="h-full absolute inset-0 w-full flex items-center justify-center flex-col">
        <div className="flex flex-col gap-4 items-center text-xl mb-8">
          <span>프론트엔드 취준생을 위해</span>
          <span>짜투리 시간을 활용하기 위해</span>
          <span>면접 질문에 답을 해보자</span>
        </div>
        <span className="text-4xl font-bold mb-8">프터뷰</span>
        <Link to="/mock/info">
          <button className="text-lg w-32 cursor-pointer rounded bg-gray-200 py-2 px-4 mb-4">모의면접</button>
        </Link>
        <Link to="/theme/info">
          <button className="text-lg w-32 cursor-pointer rounded bg-gray-200 py-2 px-4">주제별</button>
        </Link>
      </div>
      <span className="absolute bottom-4 text-center opacity-20">버그 신고 및 문의 - qwe6293@nate.com</span>
    </Layout>
  );
}

export default Home;
