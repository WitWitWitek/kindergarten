import React from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import NavLarge from './NavLarge/NavLarge';
import NavSmall from './NavSmall/NavSmall';

export default function Navbar() {
  const { windowSize } = useWindowSize();
  return (
    <>
      {windowSize.width < 768 && <NavSmall />}
      {windowSize.width >= 768 && <NavLarge />}
    </>
  );
}
