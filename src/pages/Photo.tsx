import React, { Fragment, useEffect, useRef, useState } from "react";
import { getInfoApi, getNextApi, getprevApi } from "../api/api";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useScrollPositionSaver from "../utils/scrollSave";

interface DataItem {
    res: object;
    idx: string;
    caption: string;
    id: string;
    media_url: string;
    permalink: string;
    timestamp: string;
    username: string;
}
const PhotoStyle = styled.section`
    .photo-article {
        display: flex;
        .photo-ul {
            overflow: hidden;
            width: 100vw;
            justify-content: space-evenly;
            display: flex;
            flex-wrap: wrap;
            .photo-li {
                margin: 2px 0;
                .list-item-section {
                    .list-item-article {
                        position: relative;
                        .text-area {
                            position: relative;
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            text-align: center;
                            align-content: center;
                            transition: 0.5s;
                            backdrop-filter: blur(0px);
                            background-color: #ffffff00;
                            z-index: 1;
                            :hover {
                                transition: 0.3s;
                                color: #fff;
                                font-size: 1em;
                                backdrop-filter: blur(10px);
                                background-color: #00000099;
                                a {
                                    text-shadow: 0px 0px 0px #fff;
                                }
                            }
                            a {
                                transition: 0.3s;
                                color: transparent;
                                text-shadow: 0px 0px 20px transparent;
                                position: relative;
                                display: inline-block;
                                /* word-break: keep-all;
                                word-wrap: break-word; */
                                ::before {
                                    content: "";
                                    width: 0%;
                                    position: absolute;
                                    background-color: #ffffff00;
                                    height: 1px;
                                    transition: 0.3s;
                                    bottom: 0;
                                }
                                :hover::before {
                                    background-color: #ffffff;
                                    width: 100%;
                                }
                            }

                            .caption-box {
                                font-size: 14px;
                                padding: 0 10px;
                                margin-bottom: 10px;
                                a {
                                    margin-right: 5px;
                                    :last-child {
                                        margin-right: unset;
                                    }
                                }
                            }
                            .text-time {
                                position: absolute;
                                bottom: 10px;
                                right: 10px;
                                z-index: 1;
                            }
                        }
                    }
                }
            }
        }
    }
    .img-box {
        width: calc(100vw / 3 - 10px);
        aspect-ratio: 1;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        ::after {
            content: "";
            width: 100%;
            height: 100%;
            background-color: #ffffff66;
            backdrop-filter: blur(20px);
            position: absolute;
            z-index: 0;
        }
        span {
            width: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            z-index: 1;
        }
    }
`;

const Photo = () => {
    const loadMoreRef = useRef<HTMLUListElement>(null);
    const [data, setData] = useState<DataItem[]>([]);
    const [pagenation, setPagenation] = useState(String);
    const [nextData, setNextData] = useState();
    const [prevData, setPrevData] = useState();
    const [isLoading, setIsLoading] = useState(Boolean);
    useScrollPositionSaver();

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const result = await getInfoApi();
                setData(result?.data.data);
                setPagenation(result?.data);
                setNextData(result?.data.paging.next);
                // setPrevData(result?.data.paging.next);
            } catch (error) {
                console.log("error : ", error);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);
    // console.log(pagenation);

    const getNextData = async () => {
        setIsLoading(true);
        try {
            const result = await getNextApi(String(nextData));
            // TODO 어떤 방식으로 할지 무한로드? 페이지네이션?
            // setData(result?.data.data);
            setData([...data, ...result?.data.data]);
            setPagenation(result?.data.paging.next);
        } catch (error) {
            console.log("error : ", error);
        } finally {
            setIsLoading(false);
        }
    };
    const getprevData = async () => {
        setIsLoading(true);
        try {
            const result = await getprevApi(pagenation);
            // TODO 어떤 방식으로 할지 무한로드? 페이지네이션?
            setData(result?.data.data);
            // setData([...data, ...result?.data.data]);
            setPagenation(result?.data.paging.next);
        } catch (error) {
            console.log("error : ", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log(entry.boundingClientRect);
                    console.log(entry.intersectionRatio);
                    console.log(entry.intersectionRect);
                    console.log(entry.isIntersecting);
                    console.log(entry.rootBounds);
                    console.log(entry.target);
                    console.log(entry.time);
                });
                if (loadMoreRef.current) {
                    observer.observe(loadMoreRef.current);
                    console.log(observer);
                }
            },
            {
                rootMargin: "0px 0px -20px 0px",
                threshold: 0.5,
            }
        );
        console.log(observer);
    }, []);
    return (
        <PhotoStyle>
            <article className="photo-article">
                <ul className="photo-ul" ref={loadMoreRef}>
                    {isLoading ? (
                        <div className={`${isLoading ? " isLoading" : ""}`}>
                            loading
                        </div>
                    ) : (
                        data?.map((res, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <li className="photo-li">
                                        <section className="list-item-section">
                                            <article className="list-item-article">
                                                <div
                                                    className={`img-box`}
                                                    style={{
                                                        backgroundImage: `url(${res.media_url})`,
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            backgroundImage: `url(${res.media_url})`,
                                                        }}
                                                    ></span>
                                                </div>
                                                <div className="text-area">
                                                    <p className="caption-box">
                                                        {res.caption
                                                            .split("#")
                                                            .map(
                                                                (
                                                                    hashTag,
                                                                    hashTagIdx
                                                                ) => {
                                                                    return (
                                                                        hashTag.trim() !==
                                                                            "" && (
                                                                            <Link
                                                                                to={`https://www.instagram.com/explore/tags/${hashTag.trim()}`}
                                                                                target="_blank"
                                                                                key={
                                                                                    hashTagIdx
                                                                                }
                                                                            >
                                                                                {"#" +
                                                                                    hashTag.trim() +
                                                                                    " "}
                                                                            </Link>
                                                                        )
                                                                    );
                                                                }
                                                            )}
                                                    </p>
                                                    <Link
                                                        to={res.permalink}
                                                        target="_blank"
                                                    >
                                                        게시글로
                                                    </Link>
                                                    <p className="text-time time-font">
                                                        {
                                                            res.timestamp.split(
                                                                "T"
                                                            )[0]
                                                        }{" "}
                                                        {
                                                            res.timestamp
                                                                .split("T")[1]
                                                                .split(":")[0]
                                                        }
                                                        :
                                                        {
                                                            res.timestamp
                                                                .split("T")[1]
                                                                .split(":")[1]
                                                        }
                                                        :
                                                        {res.timestamp
                                                            .split("T")[1]
                                                            .split(":")[2]
                                                            .slice(0, 2)}
                                                    </p>
                                                </div>
                                            </article>
                                        </section>
                                    </li>
                                    {data.length === idx + 1 && (
                                        <li className="photo-li">
                                            <section className="list-item-section">
                                                <article className="list-item-article">
                                                    <div
                                                        className={`img-box`}
                                                    ></div>
                                                    <div
                                                        className="text-area"
                                                        onClick={() =>
                                                            getNextData()
                                                        }
                                                    >
                                                        <Link to={"#"}>
                                                            다음
                                                        </Link>
                                                    </div>
                                                </article>
                                            </section>
                                        </li>
                                    )}
                                </Fragment>
                            );
                        })
                    )}
                </ul>
            </article>
        </PhotoStyle>
    );
};

export default Photo;
