import React from "react";

type Props = {
  children: React.ReactNode
};

const Layout = ({ children }: Props) => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      {children}
    </main>
  );
};

export default Layout;
