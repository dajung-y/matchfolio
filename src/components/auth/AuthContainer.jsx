export default function AuthContainer({ children }) {
  return (
    <div className="px-8 py-12 w-full min-w-md rounded-2xl border border-gray-50 bg-white shadow-sm">
      {children}
    </div>
  );
}
