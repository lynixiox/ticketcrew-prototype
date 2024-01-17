import styled from '@emotion/styled'

export const baseContainer = styled.div`
    display: flex;
    // height: 32px;
    align-items: flex-end;
    // margin: 0px 0 8px;
    width: 50%;
    
    && .MuiFormControl-root {
        width: 100%;
    }

    && svg {
        margin-bottom: 7px;
    }

    && .MuiOutlinedInput-root {
        height: 45px;
        // margin-left: 10px;
        color: #fff;
        align-items: flex-end;
        padding-bottom: 6px;
    }

    && input {
        top: 10px;
        padding: 0 5px 3px 5px ;
        color: ${props => props.textColor};
    }

    // FixMe: This sets the label's color, but not the text
    && .Mui-disabled.MuiInputBase-input {
        -webkit-text-fill-color: unset;
        color: ${props => props.disabledTextColor};
    }

    && .Mui-disabled.MuiInputBase-input:hover {
        cursor: not-allowed;
    }

    &&  .Mui-disabled.MuiInputLabel-root {
        color: ${props => props.disabledTextColor};
    }

    && .Mui-disabled.MuiInputLabel-root:hover {
        cursor: not-allowed;
    }

    // FixMe: Does not work
    // && .MuiInputBase-input-MuiOutlinedInput-input.Mui-disable {
    //     color: ${props => props.disabledTextColor};
    // }

    && label {
        color: ${props => props.labelColor};
        top: -3px;
        left: -10px;
        // transform: translate(14px, 0px) scale(0.75);
    }

    && .Mui-focused.MuiInputLabel-shrink{
        transform: translate(14px, 0px) scale(0.75);
        max-width: calc(200% - 24px);
    }

    && .MuiFormLabel-filled {
        transform: translate(14px, 0px) scale(0.75);
    }    

    && .MuiInputLabel-shrink {
        transform: translate(14px, 0px) scale(0.75);
        width: 100%;
    }
   
    && fieldset {
        height: 100%;
    }

    && .MuiOutlinedInput-notchedOutline {
        outline: 0;
        border: 0;
        border-radius: 0;
        border-bottom: 1px solid ${props => props.borderBottomColor};
    }

    && input:hover + .MuiOutlinedInput-notchedOutline {
        border-bottom: 2px solid ${props => props.borderBottomColor};
    }

    && input:focus + .MuiOutlinedInput-notchedOutline {
        border-bottom: 2px solid ${props => props.borderBottomColor};    
    }

`