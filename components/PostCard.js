import Image from "next/image";
import Button from "./Button";

export default function PostCard({
  likeCount,
  commentCount,
  subreddit,
  isPromoted,
  promotedLink,
  text,
  poster,
  imageURL,
}) {
  return (
    <div className="rounded cursor-pointer border hover:border-gray-500 border-gray-300 bg-reddit-fg flex flex-nowrap">
      <div className="hidden rounded-tl rounded-bl p-2 text-xs font-medium bg-gray-50 sm:flex flex-col justify-start items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-reddit-orange rounded"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
          />
        </svg>
        <p className="my-1">{likeCount}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-blue-500 rounded"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
      </div>
      <div className="w-full">
        <div className="p-2">
          <div className="flex gap-2 items-center flex-wrap text-sm">
            <div className="h-4 w-4 rounded-full bg-reddit-orange"></div>
            <p className="font-semibold">{`r/${subreddit}`}</p>
            <p className="text-xs text-gray-500">{`. ${
              isPromoted ? "Promoted" : `Posted by ${poster}`
            }`}</p>
          </div>
          <h3 className="font-semibold">{text}</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={`/assets/images/posts/${imageURL}`}
            className="max-h-512 max-w-512 text-center"
          />
          {isPromoted ? (
            <div className="text-xs text-blue-500 bg-blue-50 flex justify-between items-center p-2 w-full">
              <a>{promotedLink}</a>
              <Button secondary small unhide>
                Apply Now
              </Button>
            </div>
          ) : (
            ""
          )}
          <div className="text-xs font-semibold text-gray-500 flex w-full items-center">
            <div className="flex sm:hidden rounded-tl rounded-bl p-2 text-xs font-medium bg-gray-50 gap-4 justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-reddit-orange rounded"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
              <p className="my-1">{likeCount}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-blue-500 rounded"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
            </div>
            <div className="flex items-center py-1.5 px-3 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <p className="px-1">{`${commentCount} Comments`}</p>
            </div>
            <div className="hidden rxs:flex items-center py-1.5 px-3 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <p className="px-1">Share</p>
            </div>
            <div className="hidden rmd:flex items-center py-1.5 px-3 hover:bg-gray-200 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              <p className="px-1">Save</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
