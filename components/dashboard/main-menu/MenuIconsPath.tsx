import { menuLinks } from '@/components/dashboard/main-menu/menu-links/menu-links';
import Link from 'next/link';

const MenuIconsPath = () => {
    return (
        <div className='relative w-16 flex flex-col flex-nowrap z-50 bg-blue-600 h-full'>
            {
                menuLinks.map(e => (
                    <nav key={e.num} className='hover:bg-blue-400'>
                        <Link
                            href={e.link}
                            className='h-16 flex flex-shrink-0 flex-nowrap justify-center items-center px-2 '
                            aria-label={`Перейти на страницу ${e.pageName}`}
                        >
                            {e.icon}
                        </Link>
                    </nav>
                ))
            }
        </div>
    )
}

export default MenuIconsPath;