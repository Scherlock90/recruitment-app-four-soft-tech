import styled from 'styled-components';

export const Container = styled.div<{ isListLoading: boolean }>`
  align-content: ${({ isListLoading }) => isListLoading ? 'center' : 'unset'};
  display: grid;
  grid-template-columns: ${({ isListLoading }) => isListLoading ? '100%' : '40% 60%'} ;
  height: 100vh;
  justify-items: ${({ isListLoading }) => isListLoading ? 'center' : 'unset'};
  overflow: hidden;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
`