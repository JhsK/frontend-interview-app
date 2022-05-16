import React, { useCallback, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'src/components/Button';
import Layout from 'src/components/Layout';
import MockIntroduce from 'src/components/MockIntroduce';
import { shuffle } from 'src/lib';
import { mockTest } from 'src/problems';

type StateType = 'problem' | 'solve';

function MockProblem() {
  const navigate = useNavigate();
  const [solvedProblems, setSolvedProblems] = useState(1);
  const [state, setState] = useState<StateType>('problem');
  const randomProblems = useMemo(() => shuffle(Array.from({ length: mockTest.length }, (v, i) => i)), []);

  const onClickNextInterview = () => {
    if (solvedProblems === 9) navigate('/mock/end');

    if (solvedProblems > 1) {
      if (state === 'problem') setState('solve');
      else {
        setState('problem');
        setSolvedProblems((prev) => prev + 1);
      }
    } else {
      setSolvedProblems((prev) => prev + 1);
    }
  };

  const renderProblem = useCallback(() => {
    const index = solvedProblems - 2;
    if (solvedProblems > 1) {
      if (state === 'problem') return <div>{mockTest[randomProblems[index]].problem}</div>;
      return (
        <>
          <div className="mb-8">{mockTest[randomProblems[index]].problem}</div>
          <div className="mb-4">{mockTest[randomProblems[index]].solve[0]}</div>
          <div className="mb-4">{mockTest[randomProblems[index]].solve[1]}</div>
        </>
      );
    }

    return <MockIntroduce />;
  }, [solvedProblems, state]);

  return (
    <Layout title="주제별">
      <span className="absolute right-4 text-center opacity-20">{`남은문제: ${10 - solvedProblems}`}</span>
      {randomProblems && renderProblem()}
      <div className="absolute inset-0 h-full w-full flex items-center justify-center flex-col">
        <Button onClickButton={onClickNextInterview} color="bg-purple-100">
          다음으로
        </Button>
      </div>
    </Layout>
  );
}

export default MockProblem;
