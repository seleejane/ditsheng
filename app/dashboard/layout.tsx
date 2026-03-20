import React from 'react'
import Sidebar3 from '../components/Sidebar3';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row  justify-between w-full">
    <Sidebar3 />
      {children}
    </div>
  );
}