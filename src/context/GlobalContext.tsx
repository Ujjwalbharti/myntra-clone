'use client';

import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextType {
    updateDrawer: (flag: string) => void
    getDrawer: () => string
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
    const [drawerOpen, setDrawerOpen] = useState("");
    function updateDrawer(flag: string) {
        setDrawerOpen(flag);
    }
    function getDrawer() {
        return drawerOpen;
    }
    return (
        <GlobalContext.Provider value={{ updateDrawer, getDrawer }}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    }
    return context;
}