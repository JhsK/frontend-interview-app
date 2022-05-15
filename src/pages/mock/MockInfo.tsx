import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import Layout from 'src/components/Layout';

function MockInfo() {
  return (
    <Layout title="모의면접">
      <div>
        모의면접은 총 10문제로 진행되며, 문제를 읽고 그에 따른 대답을 생각하거나 직접 말로 설명한 뒤 정답을 확인해보는
        것이 가장 효과적인 방법입니다.
      </div>
      <div className="absolute inset-0 h-full w-full flex items-center justify-center flex-col">
        <Link to="/mock/interview">
          <Button color="bg-purple-100">다음으로</Button>
        </Link>
      </div>
    </Layout>
  );
}

export default MockInfo;
