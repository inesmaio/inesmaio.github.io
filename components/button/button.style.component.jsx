import style from 'styled-components'

export const ButtonStyle = style.div`
    font-size: 18px;
    display: flex;
    text-align: center;
    padding: 15px;
    border: 1px solid ${(props) => props.theme.colors.salmon};
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.green};
    box-shadow: 5px 5px 10px #384a37;

`