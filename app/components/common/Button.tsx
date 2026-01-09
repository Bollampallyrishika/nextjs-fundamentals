// app/components/common/Button.tsx
"use client";

export default function Button({
  label,
  onClick,
  variant = "primary",
}: {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "danger";
}) {
  const styles =
    variant === "danger"
      ? "bg-red-600 hover:bg-red-700"
      : "bg-blue-600 hover:bg-blue-700";

  return (
    <button
      onClick={onClick}
      className={`${styles} text-white px-4 py-2 rounded transition`}
    >
      {label}
    </button>
  );
}
