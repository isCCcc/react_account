import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "components/Icon";

const NavWrapper = styled.div`
  //@import 'helper.scss';
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;

      > a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
          width: 24px;
          height: 24px;
        }
        &.active{
          color: #2db970;
          .icon{
            fill: #2db970;
          }
        }
      }
    }
  }
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/details" >
                        <Icon name="detail"/>
                        明细
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" >
                        <Icon name="money"/>
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" >
                        <Icon name="statistics"/>
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav