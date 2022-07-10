import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body{
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        transition: background-color 0.1s ease-in, color 0.1s ease-in;
        font-family: 'Inter', sans-serif;
    }
`
export const darkTheme = {
    colors:{
    modalBgColor: "#00000080",
    primaryThemeColor: "#ec1d24",
    primaryThemeLightColor: "#f87171",
    primaryThemeSecondShade: "#fac6c8",
    secondaryThemeColor: "#fefefe",
    darkThemeColor: "#202020",
    darkThemeLightColor: "#71717a",
    darkThemeLighterColor:"#dbdbdd"
    },
    body:"#202020",
    text:"#fefefe",
    breakpoints:{
        mobile:"576px",
        tablet:"768px",
        laptop:"992px",
        desktop:"1200px"
    }
}

export const lightTheme = {
    colors:{
    modalBgColor: "#00000080",
    primaryThemeColor: "#ec1d24",
    primaryThemeLightColor: "#f87171",
    primaryThemeSecondShade: "#fac6c8",
    secondaryThemeColor: "#fefefe",
    darkThemeColor: "#202020",
    darkThemeLightColor: "#71717a",
    darkThemeLighterColor:"#dbdbdd"
    },
    body:"#fefefe",
    text:"#202020",
    breakpoints:{
        mobile:"576px",
        tablet:"768px",
        laptop:"992px",
        desktop:"1200px"
    }
}