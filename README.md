# hamburger_menu
My hamburger menu for dashboard

Next.js + TS + clsx + Tailwind

Add to layout.tsx:
```
import Header from '@/components/dashboard/Header';
import MainMenu from "@/components/dashboard/main-menu/MainMenu";
import MenuState from "@/components/dashboard/main-menu/context/MenuContext";

...
<MenuState>
  <Header />
  <div className='flex flex-nowrap flex-row h-full'>
    <MainMenu />
    {children}
  </div>
</MenuState>
...
```
