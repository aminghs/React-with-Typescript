import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarItem } from '../models/SidebarItem';
import Data from "./myfile.json";
import { SidebarData } from './SidebarData';
import {
   AiFillCaretDown,
   AiFillCaretUp,
} from 'react-icons/ai';

const closed = <AiFillCaretDown/>;
const opened = <AiFillCaretUp/>;

type SidebarLinkProps = {
    item: SidebarItem;
};



const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 2rem;
    text-decoration: none;
    color: #000000;

    &:hover {
        background-color: blue;
        border-left: 4px solid #6d44dc;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding-left: 3rem;
    text-decoration: none;
    color: #000000;

    &:hover {
        background-color: #6d44dc;
    }
`;

const SubDropdownLink = styled(Link)`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   height: 3.75rem;
   font-size: 1.125rem;
   padding-left: 4rem;
   text-decoration: none;
   color: #000000;
   &:hover {
      background-color: #6d44dc;
   }
`;

const SubSubmenu: FC<SidebarLinkProps> = ({ item }) => {
   const [subSubnav, subSubSubnav] = useState(false);
   const showSubSubnav = () => subSubSubnav(!subSubnav);

   return (
      <>
         <DropdownLink to={item.path} onClick={showSubSubnav}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
            <div>{item?.subnav && subSubnav ? item?.iconOpened : item?.iconClosed}</div>
         </DropdownLink>
         {subSubnav && item?.subnav?.map((subnavItem, index) => {
            
            return (
               <SubDropdownLink to={subnavItem.path}>
                  {subnavItem.icon}
                  <SidebarLabel>{subnavItem.title}</SidebarLabel>
                  {console.log(subSubnav , Data )}
               </SubDropdownLink>
            );
         })}
      </>
   )
}


const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
 
    return (
       <>
          <SidebarLink to={item.path} onClick={showSubnav}>
             <div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
             </div>
             <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
          </SidebarLink>
          {subnav &&
             item?.subnav?.map((subnavItem, index) => {
               
                return (                
                <SubSubmenu item={subnavItem} key={index} />  );
             })}
       </>
    );
 };
 
 
 export default Submenu;
