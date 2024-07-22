"use client";
import React from "react";
import { usePathname } from "next/navigation";

const RenderConditionalLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  const noLayoutPaths: string[] = ["/dashboard"];

  const shouldRenderLayout: boolean = !noLayoutPaths.includes(pathname);

  return <>{shouldRenderLayout && children}</>;
};

export default RenderConditionalLayout;
