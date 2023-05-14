import { ReactElement } from 'react';
import HeaderComponent from './header/header';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <HeaderComponent />
      <main style={{ margin: '0 10px' }}>{children}</main>
    </>
  );
}
