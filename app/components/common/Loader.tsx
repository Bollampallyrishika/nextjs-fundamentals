/*
  Loader
  - Used during API loading states
*/
export default function Loader() {
  return (
    <div
      role="status" // accessibility
      className="animate-spin rounded-full h-8 w-8 border-4 border-indigo-500 border-t-transparent"
    />
  );
}
