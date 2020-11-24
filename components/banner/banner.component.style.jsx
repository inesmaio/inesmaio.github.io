import styled from "styled-components"

export const BannerContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 5px solid ${(props) => props.theme.colors.salmon};
    border-top: 5px solid ${(props) => props.theme.colors.salmon};
`