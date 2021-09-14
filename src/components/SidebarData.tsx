import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHistory,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser
} from 'react-icons/ai';
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Rolling bearings',
        path: '/overview',
        icon: <AiOutlineHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Principles of rolling bearing selection',
                path: '/overview/users',
                icon: <AiOutlineUser />,
                iconClosed: <AiFillCaretDown />,
                iconOpened: <AiFillCaretUp />,
                subnav: [
                    {
                        title: 'General bearing knowledge',
                        path: '/overview/users',
                        icon: <AiOutlineUser />
                    }
                ],
            },
            {
                title: 'Ball bearings',
                path: '/overview/revenue',
                icon: <AiOutlineMoneyCollect />,
            },
            {
                title: 'Roller bearings',
                path: '/overview/users',
                icon: <AiOutlineUser />,
                iconClosed: <AiFillCaretDown />,
                iconOpened: <AiFillCaretUp />,
                subnav: [
                    {
                        title: 'General bearing knowledge',
                        path: '/overview/users',
                        icon: <AiOutlineUser />
                    }
                ],
            },
            {
                title: 'Bearing accessories',
                path: '/overview/revenue',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    {
        title: 'Mounted bearings and housings',
        path: '/order',
        icon: <FaOpencart />
    },

];
