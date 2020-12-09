import styled from "styled-components";

const StyledIcon = styled.i`
  color: ${ props => props.color };
  & > svg {
    font-size: ${ props => props.size }
  }
`;

export default function Icon(props) {
  const { color, size, children, className } = props;
  return (
    <StyledIcon color={color} size={size} className={className} >
      { children }
    </StyledIcon>
  )
};

Icon.defaultProps = {
  color: "#424242",
  size: "12px"
}