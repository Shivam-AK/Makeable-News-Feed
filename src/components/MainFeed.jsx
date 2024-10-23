import { ChevronDown, Clipboard, Heart, Settings } from "lucide-react";
import { FeedContent } from "../constants";

const MainFeed = () => {
  return (
    <main style={{ gridArea: "main" }} className="flex flex-col gap-y-5">
      <div className="flex p-2 bg-white rounded-lg gap-x-2">
        <input
          type="text"
          placeholder="Write a comment..."
          className="w-full px-4 py-2 text-gray-700 border rounded-lg"
        />
        <button className="px-4 py-2 text-white rounded-lg bg-orange">
          Post
        </button>
      </div>

      <div>
        <div className="flex items-center justify-between pl-3 bg-white border-b rounded-tl-lg rounded-tr-lg">
          {/* Navbar */}
          <h1 className="text-xl font-bold text-gray-700">NEWSFEED</h1>
          <button className="p-3 space-x-2 text-blue-500">
            Story Filters <ChevronDown />
          </button>
        </div>

        {FeedContent.map((item, index) => (
          <div
            key={index}
            className={`p-3 mb-4 bg-white ${
              index === 0 ? "rounded-bl-lg rounded-br-lg" : "rounded-lg"
            }`}
          >
            {/* Post Content */}
            <div className="relative flex">
              <img
                src="https://placehold.co/64x64"
                alt="Profile Image"
                className="object-cover w-16 h-16 overflow-hidden rounded-lg"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold text-blue-600">
                  {item.userName}
                </h2>
                <p className="text-sm text-gray-500">
                  Activity happened on {item.activeDate}
                </p>
                <p className="text-sm text-gray-500">
                  First posted at {item.postDate}
                </p>
                <p className="text-sm text-gray-500">
                  Last edited at {item.editDate}
                </p>

                <div className="mt-2">
                  <a
                    href={item.link}
                    className="px-3 py-1 text-sm text-white rounded-full bg-blue"
                  >
                    <Clipboard
                      width={16}
                      height={16}
                      className="inline mr-1 align-sub"
                    />
                    {item.link}
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 space-x-3 text-right">
                <p className="inline-block text-sm text-gray-500">
                  Edited 1 day ago
                </p>
                <a href="#">
                  <Settings />
                </a>
              </div>
            </div>

            <p className="my-4 text-sm text-gray-700">{item.content}</p>
            <button className="block px-4 py-2 mx-auto text-sm text-white rounded bg-green">
              Expand Story
            </button>
            {/* Buttons */}
            <div className="flex items-center justify-between pt-2">
              <button>
                <Heart stroke="#ff5560" />
              </button>
              <div className="text-sm text-gray-500">
                <span>{item.comment} Comments</span>
                <span className="ml-4">{item.favorite} Favourites</span>
              </div>
            </div>

            {/* Comment Box */}
            <div className="flex items-center pt-2 mt-2 border-t gap-x-2">
              <img
                src="https://placehold.co/40x40"
                alt="Commenter Image"
                className="object-cover w-10 h-10 overflow-hidden rounded-lg"
              />
              <input
                type="text"
                placeholder="Write a comment..."
                className="flex-1 px-3 py-2 text-gray-700 border rounded-full min-w-32"
              />
              <button className="px-4 py-2 text-white bg-red-500 rounded-sm">
                Post
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="px-4 py-2 mx-auto text-white bg-rock">
        Load More...
      </button>
    </main>
  );
};

export default MainFeed;
