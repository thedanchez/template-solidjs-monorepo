import "./button.css";

import { mergeProps, splitProps } from "solid-js";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  [key: string]: unknown;
}

/** Primary UI component for user interaction */
export const Button = (props: ButtonProps) => {
  const _props = mergeProps({ primary: false, backgroundColor: null, size: "medium" }, props);
  const [local, rest] = splitProps(_props, ["primary", "backgroundColor", "size", "label"]);
  const mode = () => (local.primary ? "storybook-button--primary" : "storybook-button--secondary");

  return (
    <button
      type="button"
      class={["storybook-button", `storybook-button--${local.size}`, mode()].join(" ")}
      style={local.backgroundColor ? { "background-color": local.backgroundColor } : undefined}
      {...rest}
    >
      {local.label}
    </button>
  );
};
