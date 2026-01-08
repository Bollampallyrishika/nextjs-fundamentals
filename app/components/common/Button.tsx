"use client";

type ButtonProps = {
  label: string;                // Button text
  onClick?: () => void;         // Click handler
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

/*
  Reusable Button
  - Props-driven design
  - Variant based styling
  - Accessible (button tag + disabled)
*/
export default function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition focus:outline-none";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled} // accessibility
      className={`${baseStyles} ${variants[variant]} ${
        disabled && "opacity-50 cursor-not-allowed"
      }`}
    >
      {label}
    </button>
  );
}
