import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import Layout from 'src/components/Layout';

function ThemeInfo() {
  return (
    <Layout title="주제별">
      <div className="flex flex-col gap-4 text-xl">
        <span className="underline cursor-pointer pb-2 text-zinc-400 hover:shadow-md hover:text-black">이력서</span>
        <span className="underline cursor-pointer pb-2 text-zinc-400 hover:shadow-md hover:text-black">
          자바스크립트
        </span>
        <span className="underline cursor-pointer pb-2 text-zinc-400 hover:shadow-md hover:text-black">리액트</span>
        <span className="underline cursor-pointer pb-2 text-zinc-400 hover:shadow-md hover:text-black">네트워크</span>
      </div>
      <div className="absolute inset-0 h-full w-full flex items-center justify-center flex-col">
        <Link to="/mock/interview">
          <Button color="bg-purple-100">다음으로</Button>
        </Link>
      </div>
    </Layout>
  );
}

export default ThemeInfo;
