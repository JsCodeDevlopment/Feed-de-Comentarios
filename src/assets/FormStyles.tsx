import styled, { css } from "styled-components";

export const LabelForm = styled.label`
${()=>css`
    color: #fff;
    font-size: 1.5rem;
`}
`
export const Button = styled.button`
${()=>css`
    height: 3.8rem;
    width: 9rem;
    border-radius: 0.5rem;
    background-color: #20dce7;
    color: #141c1e;
    &:hover{
        transition: 0.3s;
        transform: scale(1.1);
        cursor: pointer;
    }
`}
`