'use client';
import { MenuContext } from "@/components/dashboard/main-menu/context/MenuContext";
import { useContext } from "react";
import { clsx } from "clsx";

const MenuButton = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => {
  return (
    <button
      className="block float-left mr-4 outline-none border-0 p-[12px] bg-none"
      onClick={onClick}
    >
      {children}
    </button >
  )
}

const Bar = ({ isMenuOpen }: { isMenuOpen?: boolean }) => {
  return <span className={clsx('block bg-[#fff] w-[40px] h-[5px] mb-[7px] transition-all duration-300 ease-[cubic-bezier(0.645, 0.045, 0.355, 1)]',
    { 'last:-rotate-45 last:translate-x-[0px] last:translate-y-[-12px] first:rotate-45 first:translate-x-[0px] first:translate-y-[12px] even:opacity-0': isMenuOpen },
  )}></span>
}

const HamburgerButton = () => {
  const { isMenuOpen, handlerMenu } = useContext(MenuContext);

  const clickHandler = () => handlerMenu();

  return (
    <MenuButton
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <Bar isMenuOpen={isMenuOpen} />
      <Bar isMenuOpen={isMenuOpen} />
      <Bar isMenuOpen={isMenuOpen} />
    </MenuButton>
  );
}

export default HamburgerButton;