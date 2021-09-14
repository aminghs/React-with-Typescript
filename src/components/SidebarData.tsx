import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser
} from 'react-icons/ai';
import { FaOpencart } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Rolling bearings',
        path: '/rolling',
        icon: <AiOutlineHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Principles of rolling bearing selection',
                path: '/rolling/principles',
                icon: <AiOutlineUser />,
                iconClosed: <AiFillCaretDown />,
                iconOpened: <AiFillCaretUp />,
                subnav: [
                    {
                        title: 'General bearing knowledge',
                        path: '/rolling/principles/general',
                        icon: <AiOutlineUser />
                    }
                ],
            },
            {
                title: 'Ball bearings',
                path: '/rolling/ball',
                icon: <AiOutlineMoneyCollect />,
            },
            {
                title: 'Roller bearings',
                path: '/rolling/roller',
                icon: <AiOutlineUser />,
                iconClosed: <AiFillCaretDown />,
                iconOpened: <AiFillCaretUp />,
                subnav: [
                    {
                        title: 'General bearing knowledge',
                        path: '/rolling/roller/general',
                        icon: <AiOutlineUser />
                    }
                ],
            },
            {
                title: 'Bearing accessories',
                path: '/rolling/bearing',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    {
        title: 'Mounted bearings and housings',
        path: '/mounted',
        icon: <FaOpencart />
    },

];
