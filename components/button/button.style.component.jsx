import style from 'styled-components'

export const ButtonStyle = style.a`
    font-size: 20px !important;
    width: fit-content;
    display: flex;
    text-align: center;
    background-color: ${(props) => props.theme.colors.green};
    border: solid 2px ${(props) => props.theme.colors.salmon};
    border-radius: 8px;
    box-shadow: 3px 3px 10px;
    color: ${(props) => props.theme.colors.blue};
    font-size: ${(props) => props.theme.fontSizes.h2};
    padding: 15px;
    cursor: pointer;
`