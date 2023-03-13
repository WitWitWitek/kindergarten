interface HomepageProps {
    homepage: {
        content: string
    }
}

interface NavmenuProps {
    isMenuOpen: boolean
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}