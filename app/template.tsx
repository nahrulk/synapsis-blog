"use client";

import { Header } from "@/components";
import { FC, ReactNode } from "react";

interface templateProps {
  children: ReactNode;
}

const Template: FC<templateProps> = ({ children }) => {
  return <Header>{children}</Header>;
};

export default Template;
