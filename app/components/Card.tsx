type Props = {
  title: string;
};

export default function Card({ title }: Props) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mt-2">
        Tailwind utility-first component
      </p>
    </div>
  );
}
