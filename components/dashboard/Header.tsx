import HamburgerButton from "@/components/dashboard/main-menu/HamburgerButton";

const Header = ({ children }: { children?: React.ReactNode }) => {
    return (
        <header
            className="bg-[#3D8AF7] w-full h-16 flex flex-nowrap gap-4 items-center"
        >
            {children}
            <HamburgerButton />
            <h1>Header</h1>
        </header>
    )
}

export default Header;