import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Icon from "./Icon";
import React from "react";

const Tip = styled.div`
  //margin-top: 40%;
  padding-top: 40%;
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  > a {
    display: flex;

    > .icon {
      width: 24px;
      height: 24px;
      fill: #2db970;
    }

    > span {
      padding: 0 2px;
      color: #2db970;
      border-bottom: 1px solid #2db970;
    }
  }
`

const Tips: React.FC = () => {
    return (
        <Tip>本月暂无数据，
            <NavLink to="/money">
                <span>去记一笔</span>
                <Icon name="account"/>
            </NavLink>
        </Tip>
    )
}
export {Tips}