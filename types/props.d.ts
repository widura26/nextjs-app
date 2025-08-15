interface ListButtonProps {
    id: number,
    name: string,
    link: string,
    active: string
    setActive: (value: string) => void
}

interface SidebarContextType {
  active: string
  setActive: (value: string) => void
}