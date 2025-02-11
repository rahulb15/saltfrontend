// types/menu.types.ts
export interface MegaMenuItem {
    title: string;
    link: string;
    prviewIMg?: string | null;
  }
  
  export interface SubmenuItem {
    title: string;
    link: string;
    prviewIMg?: string | null;
    megaMenu?: MegaMenuItem[];
    description?: string;
    images?: string[];
  }
  
  export interface MenuItem {
    id: number;
    title: string;
    link: string;
    hasDropdown: boolean;
    children: boolean;
    active: boolean;
    submenus?: SubmenuItem[];
  }
  
  export interface MenuStats {
    totalHotels: number;
    totalCities: number;
    totalEventCategories: number;
  }
  
  export interface MenuData {
    menu: MenuItem[];
    stats: MenuStats;
  }