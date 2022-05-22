import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'src/components/Button';
import Layout from 'src/components/Layout';
import MockIntroduce from 'src/components/MockIntroduce';
import { shuffle } from 'src/lib';
import { mockTest } from 'src/problems';
import OpengraphReactComponent from 'opengraph-react';
import axios from 'axios';
import MockSolve from 'src/components/MockSolve';

type StateType = 'problem' | 'solve';

function MockProblem() {
  const navigate = useNavigate();
  const [solvedProblems, setSolvedProblems] = useState(1);
  const [state, setState] = useState<StateType>('problem');
  const randomProblems = useMemo(() => shuffle(Array.from({ length: mockTest.length }, (v, i) => i)), []);

  // const fetchGraph = async () => {
  //   const { data } = await axios.get(
  //     'https://opengraph.io/api/1.1/site/https%3A%2F%2Fcocoder16.tistory.com%2F36?accept_lang=auto&app_id=24bbe032-1ff7-442d-9b51-435796749556',
  //   );
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchGraph();
  // }, []);

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
          <div className="mb-12">{mockTest[randomProblems[index]].problem}</div>
          {/* <div className="mb-4">{mockTest[randomProblems[index]].solve[0]}</div>
          <div className="mb-4">{mockTest[randomProblems[index]].solve[1]}</div> */}
          <MockSolve solve={mockTest[randomProblems[index]]} />
        </>
      );
    }

    return <MockIntroduce />;
  }, [solvedProblems, state]);

  return (
    <Layout title="주제별">
      <span className="absolute right-4 text-center opacity-20">{`남은문제: ${10 - solvedProblems}`}</span>
      {randomProblems && renderProblem()}
      <div className="absolute inset-0 bottom- h-full w-full flex items-center justify-center flex-col">
        <Button onClickButton={onClickNextInterview} color="bg-purple-100">
          다음으로
        </Button>
      </div>
    </Layout>
  );
}

export default MockProblem;
