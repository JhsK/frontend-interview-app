import axios from 'axios';
import { useQueries } from 'react-query';
import { queryKeys } from './queryKeys';

const useOpenGraph = (problem: string, solve: string[]) =>
  useQueries([
    { queryKey: queryKeys.openGraph(problem + 1), queryFn: () => axios.get(solve[0]) },
    { queryKey: queryKeys.openGraph(problem + 2), queryFn: () => axios.get(solve[1]) },
  ]);

export default useOpenGraph;
