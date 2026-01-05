export default function Header() {
  return (
    <p className="text-sm text-gray-500">
      App Name:{' '}
      <span className="font-medium text-gray-800">
        {process.env.NEXT_PUBLIC_APP_NAME}
      </span>
    </p>
  );
}
