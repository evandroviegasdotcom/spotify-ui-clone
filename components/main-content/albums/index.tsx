import React from "react";
import List from "./list";
import Menu from "./menu";

export default function Albums() {
  return (
    <div className="bg-foreground h-full rounded-lg p-4 flex flex-col gap-3 text-dimmed">
      <Menu />
      <List />
    </div>
  );
}
