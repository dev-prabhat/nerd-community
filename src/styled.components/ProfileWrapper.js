import styled from "styled-components";

export const StyledProfileWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid ${({theme}) => theme.colors.darkThemeLightColor};
`