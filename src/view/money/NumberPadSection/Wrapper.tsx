import styled from "styled-components";

const Wrapper = styled.section`
  .output {
    padding: 9px 16px;
    line-height: 54px;
    font-size: 36px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  .pad {
    background: #f7f7f7;
    padding: 8px 0;

    button {
      height: 64px;
      width: 25%;
      background: #fff;
      border-radius: 25px;
      float: left;
      font-size: 16px;
      border: 4px solid #f7f7f7;

      &.ok {
        &-out{
          float: right;
          height: 128px;
          color: #fff;
          background: #93d9b4;
        }
        &-in{
          float: right;
          height: 128px;
          color: #fff;
          background: #fad797;
        }
      }

      &.zero {
        width: 50%;
      }
    }
  }
`
export {Wrapper}