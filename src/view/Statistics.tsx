import Layout from "components/Layout";
import React, {useState} from "react";
import {StatisticsContent} from "./statistics/StatisticsContent";
import {CategorySection} from "./money/CategorySection";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  color: white;

  > #outcome {
    background: #2db970;

    > ol > .selected-out {
      background: #28a665;
      color: white;

      ::after {
        display: none;
      }
    }
  }

  > #income {
    background: #f2b52d;

    > ol > .selected-in {
      background: #d9a328;
      color: white;

      ::after {
        display: none;
      }
    }
  }
`
type Category = '-' | '+'

function Statistics() {
    const [category, setCategory] = useState<Category>('-')
    const onChange = (c: Category) => {
        setCategory(c)
    }
    return (
        <Layout>
            <Wrapper>
                <CategorySection category={category}
                                 onChange={(category) => onChange(category)}/>
                <StatisticsContent/>
            </Wrapper>
        </Layout>
    );
}

export default Statistics