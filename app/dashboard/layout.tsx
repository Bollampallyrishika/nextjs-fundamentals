export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        Dashboard
      </h2>
      {children}
    </section>
  );
}
