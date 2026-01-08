type CardProps = {
  title: string;
  children: React.ReactNode;
};

/*
  Card
  - Wraps content
  - Accepts children (slot pattern)
*/
export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}
