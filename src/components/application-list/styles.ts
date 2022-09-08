import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: min-content;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const SingleApp = styled.div`
    align-items: center;
    background: #E95C5B;
    color: white;
    display: grid;
    font-weight: bold;
    height: 100px;
    margin-top: 10px;
    padding: 5px;
    text-align: center;
    width: 100px;
`

export const Details = styled.div`
    display: grid;
    font-size: 1rem;
    width: 100%;
`
export const KeyName = styled.span`
    color: #F6EC4C;
`