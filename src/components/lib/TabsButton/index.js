import React from 'react'
import styled from "styled-components";
import { ButtonBase } from "components";
import propTypes from "prop-types";

const buttonWidth = 200;
const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;
const ListButton = styled(ButtonBase)`
  background-color: #ddd;
  color: #424242;
  display: block;
  width: ${buttonWidth}px;
  border-radius: unset;

  &:hover {
    background-color: #ddd;
  }
`;
const Wrapper = styled.div`
  position: relative;
`;
const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${buttonWidth}px;
  height: 3px;
  background-color: blue;
  border-radius: 5px;
  transition: transform .5s;
  transform: ${ props => `translateX( ${props.no * buttonWidth}px )` }
`;

export default function TabsButton(props) {
  const {  
    tabItems,
    selectedTab
  } = props;

  const no = tabItems.findIndex( item => item.key === selectedTab );

  return (
    <Wrapper>
      <Bar no={no} />
      <ListStyled>
        {
          props.tabItems.map((tabItem) => {
            const {  
              key,
              tabName
            } = tabItem;

            return (
              <li key={key}>
                <ListButton 
                  onClick={ props.onChangeTab(key) }>{ tabName }</ListButton>
              </li>
            )
          })
        }
      </ListStyled>
    </Wrapper>
  )
}

TabsButton.propTypes = {
  tabItems: propTypes.array
};

TabsButton.defaultProps = {
  tabItems: []
};