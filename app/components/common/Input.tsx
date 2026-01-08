"use client";

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

/*
  Input component
  - Controlled input
  - Label improves accessibility
*/
export default function Input({
  label,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}
