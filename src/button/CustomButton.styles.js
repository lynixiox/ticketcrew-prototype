import styled from '@emotion/styled';


export const baseLayout = styled.div`
  display: flex;
  
  && button {
    background: transparent;
    color: ${props => props.isDark ? "#000" : "#fff"};
    border: 1px solid ${props => props.isDark ? "#000" : "#fffc"};
    border-radius: 4px;
    min-height: 26px;
    // line-height: 1.75;
    width: ${props => props.width};
    cursor: pointer;
    font-family: inherit;
    text-transform: uppercase;
    font-size: ${props => props.fontSize};
  }

  && button:hover {
      background-color: ${props => props.isDark ? "#0001" : "#fff1"};
      border: 1px solid ${props => props.isDark ? "#000e" : "#fffe"};
    }

`