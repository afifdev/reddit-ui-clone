export default function FilterButton({
  text,
  noarrow,
  gray,
  expand,
  customClass,
  small,
  children,
}) {
  return (
    <div
      className={`${customClass ? customClass : ""} ${
        expand ? "flex-grow flex justify-end" : ""
      }`}
    >
      <div
        className={`rounded-full cursor-pointer ${
          small ? "p-1 m-1" : "py-1.5 px-2 m-2"
        } font-semibold ${
          gray ? "text-gray-500 hover:bg-gray-200" : "text-blue-700 bg-blue-50"
        } flex justify-center items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 mx-0.5 mb-0.5 ${children ? "" : "hidden"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {children}
        </svg>
        <p className="mx-0.5">{text}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 mx-0.5 ${noarrow ? "hidden" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
