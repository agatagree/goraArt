export interface NavBarContextProps {
  activeDrawer: string;
  setActiveDrawer: (f: string) => void;
  isOpen: boolean;
  setIsOpen: (f: boolean) => void;
}
