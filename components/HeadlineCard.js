export default function HeadlineCard({
  title,
  text,
  source,
  image,
  customClass,
}) {
  const bgImage = {
    backgroundImage: `url('/assets/images/${image}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className={`h-44 rounded-lg cursor-pointer ${customClass}`}
      style={bgImage}
    >
      <div className="h-full w-full p-3 bg-gradient-to-b from-transparent to-black rounded-lg flex flex-col justify-end text-white">
        <p className="font-medium text-lg">{title}</p>
        <p className="font-noto text-sm line-clamp-2">{text}</p>
        <div className="flex justify-start items-center pt-2">
          {source ? (
            <>
              <div className="w-4 h-4 rounded-full bg-reddit-orange mr-1"></div>
              <p className="text-xs">{`r/${source} and more`}</p>
            </>
          ) : (
            <>
              <div className="w-4 h-4 rounded-full mr-1"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
