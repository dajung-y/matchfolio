export default function AuthButton({ title }) {
  return (
    <button
      type="submit"
      className="
        w-full py-2 rounded-2xl cursor-pointer
        text-sm font-medium bg-primary text-white hover:bg-primary-dark
       ">
      {title}
    </button>
  );
}
