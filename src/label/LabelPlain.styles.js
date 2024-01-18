import styled from '@emotion/styled';

export const baseContainer = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 0 5px ${props => props.noBottomMargin ? 0 : "16px"} 5px;

    && label {
        color: ${props => props.labelColor};
    }
`
