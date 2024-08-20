import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icons from "../assets/Icons";
const HeaderStyle = styled.section`
    height: 50px;
    display: flex;
    .header-ul {
        display: flex;
        width: 100%;
        li {
            width: 100%;
            height: 100%;
            align-self: center;
            position: relative;
            display: flex;
            transition: 0.3s;
            :hover {
                background-color: #f4f4f4;
            }
            :active {
                background-color: #ddd;
            }
            p {
                margin: auto;
            }
            a {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
        }
    }
`;
const headerList = [
    {
        page: (
            <>
                <Icons.IconsLogoB
                    style={{ verticalAlign: "middle" }}
                    height={30}
                    width={30}
                    className="App-logo"
                />
            </>
        ),
        link: "/",
    },
    { page: "photo", link: "/photo" },
    { page: "record", link: "/record" },
    { page: "identity", link: "/identity" },
];
const Header = () => {
    return (
        <HeaderStyle>
            <ul className="header-ul">
                {headerList.map((res, idx) => {
                    return (
                        <li key={idx}>
                            <p>{res.page}</p>
                            <Link to={res.link}></Link>
                        </li>
                    );
                })}
            </ul>
        </HeaderStyle>
    );
};
export default Header;
