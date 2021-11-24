import styled from 'styled-components';
import { useSubstrate } from './substrate-context/substrate-context';

/* eslint-disable-next-line */
export interface MainBoardProps {}

const StyledMainBoard = styled.div`
  color: pink;
`;

export function MainBoard(props: MainBoardProps) {
  const { isReady, loadingStatus } = useSubstrate();

  console.log({ isReady, loadingStatus });
  return (
    <StyledMainBoard>
      <h1>isReady: {isReady.toString()}!</h1>
      <h2>{loadingStatus}</h2>
    </StyledMainBoard>
  );
}

export default MainBoard;
