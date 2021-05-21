import React from "react"
import Link from 'next/link'
import { ButtonStyle } from "./button.style.component"
import { useRouter } from "next/router";

const Button = ({
    pathname,
    query,
    label
}) => {
    const router = useRouter()
    return (
        <Link href={{pathname}}>
            <ButtonStyle>{label}</ButtonStyle>
        </Link>
    )
}

export default Button