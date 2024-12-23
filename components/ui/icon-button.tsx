import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IIconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export default function IconButton({
  onClick,
  className,
  icon,
}: IIconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
}
