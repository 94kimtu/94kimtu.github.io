import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import Icons from "../assets/Icons";
const AsideStyle = styled.section`
    .to-top-bbutton-area {
        width: 100px;
        height: 100px;
        position: relative;
        perspective: 1000px;
        z-index: 1;
        transition: 0.3s;
        .to-top-bbutton-box {
            position: absolute;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transform: rotateX(0deg) rotateY(0deg);
            transition: transform 1s ease;
            &.front {
                transform: translateZ(100px);
                background-color: #64ff6499;
            }
            &.back {
                transform: rotateY(180deg) translateZ(100px);
                background-color: #28682899;
            }
            &.right {
                transform: rotateY(90deg) translateZ(100px);
                background-color: #168a1699;
            }
            &.left {
                transform: rotateY(-90deg) translateZ(100px);
                background-color: #168a1699;
            }
            &.top {
                transform: rotateX(90deg) translateZ(100px);
                background-color: #a3ffa399;
            }
            &.bottom {
                transform: rotateX(-90deg) translateZ(100px);
                background-color: #17661799;
            }
            .to-top-bbutton {
            }
            :hover {
                transform: rotateX(-180deg) rotateY(-180deg);
                &.front {
                    transform: translateZ(50px);
                    background-color: #64ff6499;
                }
                &.back {
                    transform: rotateY(180deg) translateZ(50px);
                    background-color: #28682899;
                }
                &.right {
                    transform: rotateY(90deg) translateZ(50px);
                    background-color: #168a1699;
                }
                &.left {
                    transform: rotateY(-90deg) translateZ(50px);
                    background-color: #168a1699;
                }
                &.top {
                    transform: rotateX(90deg) translateZ(50px);
                    background-color: #a3ffa399;
                }
                &.bottom {
                    transform: rotateX(-90deg) translateZ(50px);
                    background-color: #17661799;
                }
            }
        }
    }
`;
const Aside = () => {
    return (
        <AsideStyle>
            <aside className="to-top-bbutton-area">
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
