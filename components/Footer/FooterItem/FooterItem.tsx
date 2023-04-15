import React from 'react';

interface FooterItemProps {
  title: string,
  content: React.ReactNode | string
}

export default function FooterItem({ title, content }:FooterItemProps) {
  return (
    <div className="footer__item">
      <h3>{title}</h3>
      <div>{content}</div>
    </div>
  );
}
