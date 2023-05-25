import { ReactElement } from 'react';
import FooterComponent from '@/footer/footer';
import HeaderComponent from './header/header';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}
