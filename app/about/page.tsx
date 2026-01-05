export const metadata = {
  title: 'About',
  description: 'About page using Tailwind CSS',
};

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p className="text-gray-600">
        This page is created using file-based routing.
      </p>
    </div>
  );
}
