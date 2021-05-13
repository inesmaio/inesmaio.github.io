import React from "react"
import { ButtonStyle } from "./button.style.component"

const Button = ({
    handleOnClick,
    label
}) => {
    return (
        <ButtonStyle onClick={handleOnClick}>{label}</ButtonStyle>
    )
}

export default Button