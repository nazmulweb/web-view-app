"use client";

import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className="m-auto mb-16 mt-10 w-11/12">{children}</main>;
};
