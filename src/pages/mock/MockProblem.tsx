import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import Layout from 'src/components/Layout';
import MockIntroduce from 'src/components/MockIntroduce';

function MockProblem() {
  return (
    <Layout title="주제별">
      <MockIntroduce />
      <div className="absolute inset-0 h-full w-full flex items-center justify-center flex-col">
        <Link to="/mock/interview">
          <Button color="bg-purple-100">다음으로</Button>
        </Link>
      </div>
    </Layout>
  );
}

export default MockProblem;
