import { ReactElement } from 'react';
import Header from './header/header';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <main style={{ margin: '0 10px' }}>{children}</main>
    </>
  );
}
