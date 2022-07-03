import styled from "styled-components";

const StyledLoginForm = styled.form`
    width: 40%;
    margin: 5rem auto;
    border: 1px solid ${({theme}) => theme.colors.darkThemeLighterColor};
    border-radius: 0.5em;
    padding: 1rem;

    @media screen and (max-width:${({theme}) => theme.breakpoints.tablet}) {
       width: 60%;
    }

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}) {
        width:80%;
    }
`
const StyledLoginInput = styled.input`
    width: 100%;
    padding: 5px 10px;
    font-size: 1rem;
    border-radius:0.5rem;
    margin:1rem 0;

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}){
        margin: 0.5rem 0;
    }
`
const StyledH1 = styled.h1`
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    color:${({theme}) => theme.text};
    margin:1rem 0;

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}) {
        font-size: 1rem;
        line-height: 10px;
    }
`
const StyledSpan = styled.span`
    text-align: center;
    color: ${({theme}) => theme.colors.primaryThemeLightColor};
    cursor: pointer;
`

const StyledLoginButton = styled.button`
    width: 100%;
    border-radius: 0.5em;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0.5em 1em;
    border: 1px solid ${({theme}) => theme.colors.primaryThemeColor};
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.primaryThemeColor};
    color: ${({theme}) => theme.colors.secondaryThemeColor};
`

export { StyledLoginForm, StyledH1, StyledSpan, StyledLoginButton, StyledLoginInput}