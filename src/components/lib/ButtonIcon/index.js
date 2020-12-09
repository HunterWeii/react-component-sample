import { ButtonBase } from "components";
import styled from "styled-components";

const StyledButtonIcon = styled(ButtonBase)`
  > span {
    margin-left: ${ props => props.itemLeft === null ? '' : '10px' };
    margin-right: ${ props => props.itemRight === null ? '' : '10px' };
  }
`; 

const ButtonIcon = (props) => {
  const {
    itemLeft,
    itemRight,
    children,
    ..._props
  } = props;
  return (
    <StyledButtonIcon 
      itemLeft={itemLeft} 
      itemRight={itemRight} 
      {..._props}
    >
      { itemLeft }
      <span>{ children }</span>
      { itemRight }
    </StyledButtonIcon>
  )
};

ButtonIcon.defaultProps = {
  itemLeft: null,
  itemRight: null
};

export default ButtonIcon;