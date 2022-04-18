import styled from "styled-components";

const SeriesWapper = styled.div`
  margin: 228px 165px 0 165px;
  display: flex;
  justify-content: space-between;

  & > .series-wrapper {
    width: 33.33%;
    & > .series-title {
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 40px;
      letter-spacing: 0.02em;
      color: #333333;
    }
    & > .separation {
      border: 1px solid #000000;
      width: 65px;
      margin: 8px 0 52px 0;
    }
  }
`

export {SeriesWapper};