export default function Button({ secondary, full, orange, unhide, children }) {
  return (
    <a
      className={`cursor-pointer ${unhide ? "" : "hidden sm:inline-block"} ${
        secondary
          ? "text-blue-500 hover:bg-blue-50 border-blue-500"
          : orange
          ? "bg-reddit-orange text-white hover:opacity-90"
          : "bg-blue-600 hover:bg-blue-500 text-white text-center"
      } px-4 r2xl:px-10 py-1.5 rounded-full font-noto font-semibold text-sm border mx-0.5 ${
        full ? "w-full text-center" : ""
      }`}
    >
      {children}
    </a>
  );
}
