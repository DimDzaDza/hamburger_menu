import { JSX } from "react";

import HomeIcon from '@/components/dashboard/main-menu/icons/HomeIcon';
import ProfileIcon from '@/components/dashboard/main-menu/icons/ProfileIcon';
import iconsStyle from "@/components/dashboard/main-menu/icons/icons-style";

type MenuLink = {
    num: number,
    pageName: string,
    link: string,
    icon: JSX.Element
};

export const menuLinks: Array<MenuLink> = [
    { num: 1, pageName: "Главная", link: "/dashboard", icon: <HomeIcon className={iconsStyle} /> },
    { num: 2, pageName: "Профиль", link: "/dashboard/profile", icon: <ProfileIcon className={iconsStyle} /> }
];
