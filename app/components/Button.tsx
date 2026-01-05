'use client';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  label,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium text-white transition
        ${
          disabled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
        }`}
    >
      {label}
    </button>
  );
}
