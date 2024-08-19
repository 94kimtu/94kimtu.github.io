import React, { useEffect, useState } from "react";
import getInfoApi from "../api/api";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    .img-box {
        width: 500px;
        aspect-ratio: 1;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
`;
const Photo = () => {
    const [data, setData] = useState<DataItem[]>([]);
    const [pagenation, setPagenation] = useState(null);
    const [isLoading, setIsLoading] = useState(Boolean);
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const result = await getInfoApi();
                setData(result.data);
                setPagenation(result.paging);
            } catch (error) {
                console.log("error : ", error);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 300);
            }
        };
        getData();
    }, []);
    return (
        <PhotoStyle>
            <article>
                <ul>
                    {isLoading ? (
                        <div className={`${isLoading ? " isLoading" : ""}`}>
                            loading
                        </div>
                    ) : (
                        data.map((res, idx) => {
                            return (
                                <li key={res.id}>
                                    <section>
                                        <article>
                                            <div
                                                className={`img-box`}
                                                style={{
                                                    backgroundImage: `url(${res.media_url})`,
                                                }}
                                            ></div>
                                        </article>
                                        {res.caption.split("#")}
                                        <Link to={res.permalink}></Link>
                                        <div>
                                            {res.timestamp.split("T")[0]}{" "}
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
                                        </div>
                                    </section>
                                </li>
                            );
                        })
                    )}
                </ul>
            </article>
        </PhotoStyle>
    );
};

export default Photo;
