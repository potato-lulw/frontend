// SideNavbar.js
import React, { useState } from 'react';
import { HiMiniHome } from "react-icons/hi2";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { HiBookmark } from "react-icons/hi2";
import { HiSearch } from "react-icons/hi";
import Tooltip from './tooltip';

const SideNavbar = () => {
    const [tooltipText, setTooltipText] = useState('');

    const handleMouseEnter = (text) => {
        setTooltipText(text);
    };

    const handleMouseLeave = () => {
        setTooltipText('');
    };

    // Array of icon objects with tooltips
    const icons = [
        { icon: <HiMiniHome />, tooltip: 'Home' },
        { icon: <HiSearch />, tooltip: 'Search' },
        { icon: <HiOutlineGlobeAlt />, tooltip: 'Explore' },
        { icon: <HiBookmark />, tooltip: 'Bookmarks' },
        { icon: <HiUser />, tooltip: 'Profile' },
    ];

    return (
        <div className="side-navbar text-primary w-64 fixed left-0 top-0 overflow-auto flex-col flex justify-center transition-all duration-300 ease-in-out">
            <ul className='flex flex-col items-center justify-center glass overflow-hidden text-3xl gap-4 py-8 rounded-full w-[100%] h-[45%]'>
                {icons.map((item, index) => (
                    <li
                        key={index}
                        onMouseEnter={() => handleMouseEnter(item.tooltip)}
                        onMouseLeave={handleMouseLeave}
                        className='items-center flex flex-col transition transform duration-300 ease-in-out'
                    >
                        {item.icon}
                        {tooltipText === item.tooltip && <Tooltip text={item.tooltip} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideNavbar;
