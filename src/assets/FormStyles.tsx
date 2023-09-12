import styled, { css } from "styled-components";

export const LabelForm = styled.label`
${()=>css`
    color: #5a3546;
    font-size: 1.5rem;
`}
`
export const Button = styled.button`
${()=>css`
    height: 3.8rem;
    width: 9rem;
    border-radius: 0.5rem;
    background-color: #b5485f;
    color: #fff;
    &:hover{
        transition: 0.3s;
        transform: scale(1.1);
        cursor: pointer;
    }
`}
`