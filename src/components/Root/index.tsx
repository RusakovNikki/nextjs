"use client";

import { store } from "@/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface IRootProps {
  children: ReactNode;
}

const Root = (props: IRootProps) => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};

export default Root;
