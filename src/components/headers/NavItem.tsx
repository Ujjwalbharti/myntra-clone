'use client';

import { useGlobalContext } from "@/context/GlobalContext";
import React from "react";

interface NavItemProps {
    type: string;
}

const NavItem: React.FC<NavItemProps> = ({ type }) => {
    const { updateDrawer } = useGlobalContext();

    const handleMouseEnter = React.useCallback(() => {
        updateDrawer(true);
    }, [updateDrawer]);

    const handleMouseLeave = React.useCallback(() => {
        updateDrawer(false);
    }, [updateDrawer]);

    return (
        <div
            className="flex items-center h-full relative group border-b-4 border-white group-hover:border-black cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className="block">{type}</span>
            <div
                className="opacity-0 fixed h-[55%] w-[70%] left-[117px] top-[78px] z-30 bg-white group-hover:opacity-100 transition-all duration-500 ease-in-out"
            >
                {type}
            </div>
        </div>
    );
};

export default NavItem;
