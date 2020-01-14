import React from "react";

const ContentWrapper = (props) => (
    <section className="content-wrapper">
        {props.children}
    </section>
)

export {
    ContentWrapper,
}