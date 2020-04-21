import React from "react";
import styled from "styled-components";
import ImgLogo from "../../assets/images/logo.png";

const StyledHeader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: 80px;
    padding: 24px 80px;
`;

const LogoWrapper = styled.div`
    max-width: 80px;
`;

const Logo = styled.img`
    width: 100%;
`;

const Menus = styled.ul`
    margin-left: auto;
    list-style: none;
`;

const MenuLink = styled.li`
    padding: 16px;
    margin: 0 16px;
    font-size: 24px;
    display: inline;
    text-transform: uppercase;
    letter-spacing: 4px;

    a {
        color: white;
        text-decoration: none;

        &:hover {
            color: #efdd03;
        }
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <LogoWrapper>
                <Logo src={ImgLogo} />
            </LogoWrapper>
            <Menus>
                <MenuLink>
                    <a href="/">Home</a>
                </MenuLink>
                <MenuLink>
                    <a href="/about">About</a>
                </MenuLink>
                <MenuLink>
                    <a href="/contact">Contact</a>
                </MenuLink>
            </Menus>
        </StyledHeader>
    );
};

export default Header;
