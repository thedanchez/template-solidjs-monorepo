import { createSignal, type JSX, untrack } from "solid-js";

interface InputProps {
  placeholder?: string;
  value?: string;
  onInput?: (value: string) => void;
  type?: "text" | "email" | "password";
}

export function Input(props: InputProps) {
  const [value, setValue] = createSignal(untrack(() => props.value) || "");

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
    props.onInput?.(target.value);
  };

  return (
    <input
      type={props.type || "text"}
      class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder={props.placeholder}
      value={value()}
      onInput={handleInput}
    />
  );
}

interface BadgeProps {
  children: JSX.Element;
  color?: "blue" | "green" | "red" | "yellow";
}

export function Badge(props: BadgeProps) {
  const colorStyles = () => {
    switch (props.color) {
      case "green":
        return "bg-green-100 text-green-800";
      case "red":
        return "bg-red-100 text-red-800";
      case "yellow":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <span
      class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorStyles()}`}
    >
      {props.children}
    </span>
  );
}

// Re-export everything as default for convenience
export default {
  Input,
  Badge,
};
