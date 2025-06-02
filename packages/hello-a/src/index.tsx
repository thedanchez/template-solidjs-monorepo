import type { JSX } from "solid-js";

interface ButtonProps {
  children: JSX.Element;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export function Button(props: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
  const variantStyles = () => {
    switch (props.variant) {
      case "secondary":
        return "bg-gray-200 text-gray-800 hover:bg-gray-300";
      default:
        return "bg-blue-500 text-white hover:bg-blue-600";
    }
  };

  return (
    <button class={`${baseStyles} ${variantStyles()}`} onClick={() => props.onClick?.()}>
      {props.children}
    </button>
  );
}

interface CardProps {
  title: string;
  children: JSX.Element;
}

export function Card(props: CardProps) {
  return (
    <div class="border border-gray-300 rounded-lg p-4 shadow-md">
      <h3 class="text-lg font-semibold mb-2">{props.title}</h3>
      <div>{props.children}</div>
    </div>
  );
}

// Re-export everything as default for convenience
export default {
  Button,
  Card,
};
