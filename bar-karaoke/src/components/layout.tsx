import { ReactElement } from 'react';
import Header from './header/header';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <main style={{ marginTop: '65px' }}>{children}</main>
    </>
  );
}
