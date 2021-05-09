import React from "react";
import { BannerContainer } from "./banner.component.style"

class Banner extends React.Component {
    render() {
        return (
            <BannerContainer
                style={{
                    backgroundImage: `url(${this.props.img_src})`,
                    backgroundSize: "cover",
                    height: "50vh",
                    backgroundAttachment: "fixed",
                }}>
                <h1>{this.props.title}</h1>
            </BannerContainer>
        )
    }
}

export default Banner;