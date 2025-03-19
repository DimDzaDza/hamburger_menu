'use client';
import { createContext, useState } from "react";

export const MenuContext = createContext({
    isMenuOpen: false,
    handlerMenu: () => { }
});

const MenuState = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setMenuState] = useState(false);

    const handlerMenu = () => setMenuState(!isMenuOpen);

    return (
        <MenuContext.Provider value={{ isMenuOpen: isMenuOpen, handlerMenu }} >
            {children}
        </MenuContext.Provider>
    );
}

export default MenuState;