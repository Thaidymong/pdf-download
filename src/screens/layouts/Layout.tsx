"use client";

import { PropsWithChildren } from "react";
import Header from "./Header";

export default function Layout(props: PropsWithChildren) {

  return (
    <div className="flex">
      <main className="grow">
        <Header />
      </main>
    </div>
  );
}
