import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Data from "./myfile.json";
import Submenu from './Submenu';


const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0;
    height: 5rem;
    background-color: blue;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 400px;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 60px;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    border-style: solid;
    border-color: black;
`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 1rem;
`;

const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <IconContext.Provider value={{ color: '#000' }}>
            <Nav>
                <NavIcon to="#" onClick={showSidebar}>
                    <AiOutlineMenu />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#" onClick={showSidebar}>
                        <AiOutlineClose />
                    </NavIcon>                   
                    {Data.Data.map((item: any, index: any) => {
                        return <Submenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
};

export default Sidebar;
