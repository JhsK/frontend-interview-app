import React, { ReactNode } from 'react';
import Nav from './Nav';

interface LayoutProps {
  Children: Element;
  children?: any;
}

function Layout({ children = null, noNav = false, title = '' }: any) {
  return (
    <div>
      <div className="bg-white top-0 left-0 w-full min-h-screen relative md:mx-auto md:max-w-xl shadow-lg">
        {!noNav && <Nav title={title} />}
        <div className="py-8 px-5 h-full">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
