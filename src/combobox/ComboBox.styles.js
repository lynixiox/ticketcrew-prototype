import styled from '@emotion/styled';

export const ComboBox = styled.div`
    width: ${props => props.width};
    height: 45px;
    

    && .formControl {
        width: calc(100% - 0px);
        // margin: 16px 8px 8px 8px;
        color: white;
        
    }
    
    && label {
        color: ${props => props.labelColor};
        top: -3px;
        left: -10px;
    }

    && .Mui-focused.MuiInputLabel-shrink{
        transform: translate(14px, 0px) scale(0.75);
        max-width: calc(200% - 24px);
    }

    && .MuiInputLabel-shrink{
        transform: translate(14px, 0px) scale(0.75);
        max-width: calc(200% - 24px);
    }

    .&& .MuiFormLabel-root.Mui-focused {
        color: ${props => props.labelColor};
        
    }

    && .MuiSvgIcon-root {
        color: ${props => props.svgColor};
        top: calc(50% - 0.3em);
    }

    && .MuiInput-input {
        width: calc(100% - 10px);
        border-radius: 3px;
        padding-left: 5px;
        padding-right: 5px;
        color: ${props => props.inputColor};

    }

    && .MuiInputBase-root{
        width: 100%;
        height: fit-content;
        &:hover:before{
            border-bottom-color:#fff;
        }
    }

    && .MuiOutlinedInput-notchedOutline {
        border: 0;
        border-bottom: 1px solid ${props => props.borderBottomColor}; 
        border-radius: 0;
        margin: 0 0px 2px 0px;
    }

    && .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline {
        border: 0;
        border-bottom: 2px solid ${props => props.borderBottomColor}; 
        border-radius: 0;
    }

    && .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {

        padding-right: 32px;
        padding-bottom: 6px;
    }

    && .MuiInputBase-input {
        color: ${props => props.inputColor};
        padding: 15px 5px 5px;
        
    }

    // && input {
    //     color: ${props => props.inputColor};
    // }

`