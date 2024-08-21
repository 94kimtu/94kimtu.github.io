import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import Icons from "../assets/Icons";
const AsideStyle = styled.section`
    .to-top-bbutton-area {
        width: 100px;
        height: 100px;
        position: relative;
        z-index: 1;
        transition: 0.3s;
        margin: auto;
        transform-style: preserve-3d;
        .to-top-bbutton-box {
            position: absolute;
            width: 100%;
            height: 100%;
            translate: 0 0 0px;
            transform-style: preserve-3d;
            transform: translateZ(50px);
            &.front {
                rotate: 0 1 0 0deg;
                background-color: #00000066;
            }
            &.back {
                rotate: 0 1 0 180deg;
                background-color: #00000066;
            }
            &.right {
                rotate: 0 1 0 -90deg;
                background-color: #00000066;
            }
            &.left {
                rotate: 0 1 0 90deg;
                background-color: #00000066;
            }
            &.top {
                rotate: 1 0 0 90deg;
                background-color: #00000066;
            }
            &.bottom {
                rotate: 1 0 0 -90deg;
                background-color: #00000066;
            }
            .to-top-bbutton {
            }
        }
        :hover {
            rotate: 1 1 1 45deg;
        }
    }
`;
const Aside = () => {
    return (
        <AsideStyle>
            <aside className="to-top-bbutton-area">
                <section className="to-top-bbutton-box front">
                    <article className="to-top-bbutton first">front</article>
                    <article className="to-top-bbutton second"></article>
                </section>
                <section className="to-top-bbutton-box back">
                    <article className="to-top-bbutton first">back</article>
                    <article className="to-top-bbutton second"></article>
                </section>
                <section className="to-top-bbutton-box right">
                    <article className="to-top-bbutton first">right</article>
                    <article className="to-top-bbutton second"></article>
                </section>
                <section className="to-top-bbutton-box left">
                    <article className="to-top-bbutton first">left</article>
                    <article className="to-top-bbutton second"></article>
                </section>
                <section className="to-top-bbutton-box top">
                    <article className="to-top-bbutton first">top</article>
                    <article className="to-top-bbutton second"></article>
                </section>
                <section className="to-top-bbutton-box bottom">
                    <article className="to-top-bbutton first">bottom</article>
                    <article className="to-top-bbutton second"></article>
                </section>
            </aside>
        </AsideStyle>
    );
};
export default Aside;
