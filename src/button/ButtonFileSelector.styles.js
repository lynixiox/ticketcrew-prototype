import styled from "@emotion/styled";

export const baseLayout = styled.div`
  color: ${props => props.isDark ? "#000" : "#fff"};
  background: transparent;
  border: 1px solid ${props => props.isDark ? "#000c" : "#fffc"};
  border-radius: 4px;
  font-weight: 500;
  line-height: 1.75;
  text-align: center;
  width: ${props => props.width};
  padding: 0;
  margin: 3px;
  font-size: ${props => props.fontSize};

  && #selectFiles {
    position: absolute;
    opacity: 0;
    
  }

  && label {

  }

  &&:hover {
    background-color: ${props => props.isDark ? "#0001" : "#fff1"};
    border: 1px solid ${props => props.isDark ? "#000e" : "#fffe"};
  }

`