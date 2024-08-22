import React from "react";
import styled from "styled-components";
import ScrollToTop from "../utils/scrollToTop";
const AsideStyle = styled.section`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1;
    .to-top-bbutton-area {
        width: 50px;
        height: 50px;
        position: relative;
        z-index: 1;
        margin: auto;
        transform-style: preserve-3d;
        transition: 0.5s;
        :hover {
            transition: 5s;
            rotate: 0.1 1 0.1 360deg;
        }
        :active {
            transition: 1s;
            rotate: 0 0 0 360deg;
        }
        .to-top-bbutton-box {
            cursor: pointer;
            user-select: none;
            position: relative;
            position: absolute;
            width: 100%;
            height: 100%;
            transition: 0.5s;
            transform: translateZ(25px);
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
                width: 20px;
                height: 2px;
                background-color: #ffffffdd;
                position: absolute;
                top: 22px;
                left: 22px;
                transition: 0.3s;
                transform: rotate(45deg);
                &.first {
                    transform: rotate(-45deg);
                    left: 8px;
                }
            }
        }
    }
`;
const Aside = () => {
    return (
        <AsideStyle>
            <aside
                className="to-top-bbutton-area"
                onClick={() => ScrollToTop()}
            >
                <section className="to-top-bbutton-box front">
                    <article className="to-top-bbutton first"></article>
                    <article className="to-top-bbutton second"></article>
                </section>
                <section className="to-top-bbutton-box back">
                    <article className="to-top-bbutton first"></article>
                    <article className="to-top-bbutton second"></article>
                </section>
                <section className="to-top-bbutton-box right">
                    <article className="to-top-bbutton first"></article>
                    <article className="to-top-bbutton second"></article>
                </section>
                <section className="to-top-bbutton-box left">
                    <article className="to-top-bbutton first"></article>
                    <article className="to-top-bbutton second"></article>
                </section>
                <section className="to-top-bbutton-box top">
                    <article className="to-top-bbutton first"></article>
                    <article className="to-top-bbutton second"></article>
                </section>
                <section className="to-top-bbutton-box bottom">
                    <article className="to-top-bbutton first"></article>
                    <article className="to-top-bbutton second"></article>
                </section>
            </aside>
        </AsideStyle>
    );
};
export default Aside;
