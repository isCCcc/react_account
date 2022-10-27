import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
require('icons/detail.svg')
require('icons/money.svg')
require('icons/statistics.svg')

const NavWrapper=styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
    >ul{
      display: flex;
      >li{
        width: 33.3333%;
        text-align: center;
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
`
const Nav=()=>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <svg className="icon" >
                        <use xlinkHref="#detail" />
                    </svg>
                    <Link to="/details">明细</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#money" />
                    </svg>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#statistics" />
                    </svg>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav