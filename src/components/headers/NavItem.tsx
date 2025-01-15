'use client';

import { useGlobalContext } from "@/context/GlobalContext";
import React from "react";

interface NavItemProps {
    type: string;
}

const NavItem: React.FC<NavItemProps> = ({ type }) => {
    const { updateDrawer, getDrawer } = useGlobalContext();

    const handleMouseEnter = React.useCallback(() => {
        updateDrawer(type);
    }, [updateDrawer]);

    const handleMouseLeave = React.useCallback(() => {
        updateDrawer("");
    }, [updateDrawer]);

    return (
        <div
            className={`relative flex items-center h-full border-b-4  cursor-pointer group ${getDrawer() === type ? 'border-black' : 'border-white'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className="block">{type}</span>
            <div
                className={`fixed h-[55%] w-[70%] left-[117px] top-[78px] z-30 bg-white transition-opacity duration-500 ease-in-out ${getDrawer() === type ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {type}
            </div>
        </div>
    );
};

export default NavItem;
