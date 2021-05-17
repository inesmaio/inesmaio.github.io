import React from "react"
import { ButtonStyle } from "./button.style.component"

const Button = ({
    handleOnClick,
    label
}) => {
    return (
        <ButtonStyle onClick={handleOnClick}>
            <link
                href={{
                    pathname: 'post/[id]',
                    query: { id: post.id }
                }}>
                <a>{label}</a>
            </link>

        </ButtonStyle>
    )
}

export default Button