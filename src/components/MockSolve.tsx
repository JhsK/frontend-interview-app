import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOpenGraph from 'src/hooks/useOpenGraph';
import { ImockTest } from 'src/types';

interface MockSolveProps {
  solve: ImockTest;
}

function MockSolve({ solve }: MockSolveProps) {
  const data = useOpenGraph(solve.problem, solve.solve);
  //   console.log(data)

  useEffect(() => {
    if (data[0].status === 'success') {
      console.log('asfasf', data);
      data.map((v, i) => console.log(v, i));
    }
  }, [data]);

  return (
    <>
      {data[0].status === 'success' &&
        data[1].status === 'success' &&
        data.map((res, index) => (
          <Link to={solve.solve[index]}>
            <div className="mb-8 flex gap-4 items-center cursor-pointer h-28">
              <img
                className="w-3/12 rounded border h-full"
                src={res.data.data.hybridGraph.image}
                alt={res.data.data.hybridGraph.title}
              />
              <div className="w-8/12">
                <span className="font-bold text-lg block mb-2 whitespace-nowrap">
                  {res.data.data.hybridGraph.title}
                </span>
                <span className="text-sm opacity-50">{`${res.data.data.hybridGraph.description.substring(
                  0,
                  80,
                )}...`}</span>
              </div>
            </div>
          </Link>
        ))}
      {data[0].status !== 'success' && <div>test</div>}
    </>
  );
}

export default MockSolve;
