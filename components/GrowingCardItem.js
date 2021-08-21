export default function GrowingCardItem({ number, text }) {
  return (
    <div className="flex items-center py-2 px-6 text-sm font-medium cursor-pointer">
      <p>{number}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mx-2 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
      <div className="h-8 w-8 rounded-full bg-reddit-orange mx-1"></div>
      <p>{`r/${text}`}</p>
    </div>
  );
}
