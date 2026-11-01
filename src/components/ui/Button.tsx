import type { ButtonHTMLAttributes } from "react";

export default function Button({
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`rounded-md text-lg px-5 py-2.5 border border-line transition-all duration-300 hover:cursor-pointer hover:bg-fg hover:text-bg hover:border-fg hover:shadow-lg active:scale-95 active:opacity-90 ${className}`}
      {...props}
    />
  );
}
