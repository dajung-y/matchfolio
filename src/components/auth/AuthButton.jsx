export default function AuthButton({ title }) {
  return (
    <button
      type="submit"
      className="
        w-full py-3 rounded cursor-pointer
        text-sm font-medium bg-primary text-white hover:bg-primary-dark
       ">
      {title}
    </button>
  );
}
