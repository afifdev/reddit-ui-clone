import Head from "next/head";
import Navbar from "../components/Navbar";
import HeadlineCard from "../components/HeadlineCard";
import FilterButton from "../components/FilterButton";
import GrowingCardItem from "../components/GrowingCardItem";
import Button from "../components/Button";
import PostCard from "../components/PostCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reddit - Dive into anything</title>
      </Head>
      <div className="min-h-screen bg-reddit-bg font-ibm">
        {/* Navbar */}
        <Navbar />
        <div className="max-w-screen-r2xl box-content px-6 mx-auto py-2">
          {/* Trending */}
          <div className="px-4">
            <p className="font-medium text-sm py-2">Trending today</p>
            <div className="grid grid-cols-1 rsm:grid-cols-2 rmd:grid-cols-3 rlg:grid-cols-4 gap-3">
              <HeadlineCard
                title="Shang Chi"
                text="My Take On Shang Chi Poster. Didn't quite enjoy the official announcement"
                source="Marvel"
                image="headline1.jpg"
              />
              <HeadlineCard
                customClass="hidden rsm:block"
                title="Afghanistan"
                text="POV: You're sitting ON a C-17 as it takes off from Kabul, Afghanistan."
                source="interestingasfuck"
                image="headline2.png"
              />
              <HeadlineCard
                customClass="hidden rmd:block"
                title="COVID vaccines"
                text="An Alabama doctor watched patients reject the coronavirus vaccine. Now he’s refusing to treat them."
                source="LeopardsAteMyFace"
                image="headline3.jpg"
              />
              <HeadlineCard
                customClass="hidden rlg:block"
                title="Northern Alliance"
                text="'Northern Alliance' flag hoisted in Panjshir in first resistance against Taliban"
                image="headline4.jpg"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-screen-rxl box-content mx-auto py-4 sm:px-10">
          <p className="text-sm font-ibm font-medium">Popular posts</p>
          <div className="flex gap-8 my-3">
            {/* Post */}
            <div className="flex-grow ">
              {/* Filter Card */}
              <div className="text-sm w-full bg-reddit-fg rounded border border-gray-300 flex justify-between items-center">
                <FilterButton text="Hot" noarrow>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </FilterButton>
                <FilterButton text="Singapore" />
                <FilterButton
                  text="New"
                  noarrow
                  gray
                  customClass="hidden sm:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </FilterButton>
                <FilterButton
                  text="Top"
                  noarrow
                  gray
                  customClass="hidden sm:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                  />
                </FilterButton>
                <FilterButton gray noarrow customClass="hidden sm:block">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </FilterButton>
                <FilterButton expand gray>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </FilterButton>
              </div>

              {/* Post Content */}
              <div className="grid grid-cols-1 gap-2 py-4">
                <PostCard
                  likeCount={6}
                  commentCount={0}
                  imageURL="promo.jpg"
                  isPromoted
                  promotedLink="ibkr.com.sg"
                  subreddit="UBKR_Official"
                  text="At 1/10 the size of one bitcoin, Micro Bitcoin futures (MBT) provide an efficient, cost-effective way to fine-tune bitcoin exposure and enhance your trading strategies. Open an account to trade CME Group Micro Bitcoin futures at IBKR."
                />
                <PostCard
                  likeCount="29.1k"
                  commentCount={646}
                  imageURL="post.jpg"
                  subreddit="gaming"
                  text="TIL"
                  poster="mrdickballs"
                />
                <PostCard
                  likeCount="7.7k"
                  commentCount={84}
                  imageURL="post2.jpg"
                  subreddit="rareinsults"
                  text="Man did him dirty."
                  poster="sahil_ad"
                />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden rlg:flex flex-col w-76 flex-shrink-0 flex-grow-0 items-stretch">
              <div className="w-full bg-white min-w-full rounded border border-gray-300 mb-4">
                <div
                  className="h-20 flex justify-end flex-col rounded-t cursor-pointer"
                  style={{
                    backgroundImage: `url('/assets/images/community-image.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="h-full w-full bg-gradient-to-b from-transparent to-black rounded-lg flex flex-col justify-end text-white">
                    <p className="mx-4 my-2 font-medium">
                      Today's Top Growing Communities
                    </p>
                  </div>
                </div>
                <GrowingCardItem number={1} text="TrueOffMyChest" />
                <hr />
                <GrowingCardItem number={2} text="gtaonline" />
                <hr />
                <GrowingCardItem number={3} text="olympics" />
                <hr />
                <GrowingCardItem number={4} text="wow" />
                <hr />
                <GrowingCardItem number={5} text="sports" />
                <div className="my-2 px-4">
                  <Button full>View All</Button>
                  <div className="flex font-noto text-xs pt-3">
                    <FilterButton small noarrow text="Near You" />
                    <FilterButton small noarrow text="Sports" />
                    <FilterButton small noarrow text="Gaming" />
                    <FilterButton small noarrow text="Aww" />
                  </div>
                </div>
              </div>
              <div className="w-full p-2 bg-white min-w-full rounded border border-gray-300 mb-4">
                <div className="flex justify-between text-xs py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-11 w-11 text-reddit-orange mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold">Reddit Premium</p>
                    <p>The best Reddit experience, with monthly Coins</p>
                  </div>
                </div>
                <Button full orange>
                  Try Now
                </Button>
              </div>
              <div className="w-full h-full min-w-full">
                <div className="sticky top-16 text-xs bg-white p-2 rounded border border-gray-300 mb-4">
                  <div className="grid grid-cols-2 gap-2 mx-1 my-3">
                    <p>Help</p>
                    <p>About</p>
                    <p>Reddit Coins</p>
                    <p>Careers</p>
                    <p>Reddit Premium</p>
                    <p>Press</p>
                    <p>Reddit Gifts</p>
                    <p>Advertise</p>
                    <p>Communities</p>
                    <p>Blog</p>
                    <p>Rereddit</p>
                    <p>Terms</p>
                    <p>Topics</p>
                    <p>Content Policy</p>
                    <p></p>
                    <p>Privacy Policy</p>
                    <p></p>
                    <p>Mod Policy</p>
                  </div>
                  <div className="mt-6">
                    <p>Reddit Inc © 2021 . All rights reserved</p>
                  </div>
                </div>
                <div className="sticky top-95 flex justify-center">
                  <Button>Back To Top</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
