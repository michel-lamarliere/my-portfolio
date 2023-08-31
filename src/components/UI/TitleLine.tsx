import React from "react";

type TitleLineProps = {
  text: string;
  className?: string;
};

export function TitleLine({ text, className }: TitleLineProps) {
  return (
    <div className={className}>
      <div className="text-lg font-semibold">{text}</div>
      <span className="block w-44 h-px bg-white" />
    </div>
  );
}
