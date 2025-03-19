'use client';
import { menuLinks } from '@/components/dashboard/main-menu/menu-links/menu-links';
import { useContext, useRef } from 'react';
import { MenuContext } from '@/components/dashboard/main-menu/context/MenuContext';
import Link from 'next/link';
import clsx from 'clsx';
import { montserrat } from "@/components/fonts/fonts";
import useOnClickOutside from './hooks/onClickOutside';

const MenuLinkPath = () => {
    const { isMenuOpen, handlerMenu } = useContext(MenuContext);
    const node = useRef(undefined);


    useOnClickOutside(node as unknown as React.RefObject<HTMLDivElement>, () => {
        if (isMenuOpen) {
            handlerMenu();
        }
    });


    return (

        <div ref={node as unknown as React.RefObject<HTMLDivElement>} className={clsx('absolute flex top-0 left-16 flex-col flex-nowrap bg-blue-500 h-full w-40 transform -translate-x-full transition-all duration-300 ease-in-out z-30',
            { 'transform translate-x-[0]': isMenuOpen }
        )}>
            {menuLinks.map(e => (
                <Link key={e.num} href={e.link}
                    className={`h-16 w-full flex flex-shrink-0 flex-nowrap justify-start items-center pl-8 py-5 ${montserrat.className} text-l antialiased text-[#fff] hover:bg-blue-300`}
                    aria-label={`Перейти на страницу ${e.pageName}`}
                >{e.pageName}</Link>
            ))}
        </div>
    )
}

export default MenuLinkPath;