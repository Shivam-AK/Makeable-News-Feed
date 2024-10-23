import { MoveLeft, MoveRight, Plus, Settings } from "lucide-react";
import { personalProgress, tasks } from "../constants";
import { useState } from "react";

const RightSidebar = () => {
  const [brand, setBrand] = useState([1, 2, 3]);
  let newArray = [4, 5, 6, 7, 8, 9, 10];

  return (
    <aside style={{ gridArea: "aside" }} className="flex flex-col gap-y-4">
      {/* Board */}
      <div className="bg-white rounded-lg">
        <div className="flex items-center justify-between p-2 pl-3 mb-2 border-b">
          <h3 className="text-base font-bold text-h3Color">Boards</h3>
          <button className="px-3 py-1 text-sm text-white rounded-md bg-blue">
            <Plus width={18} height={18} /> New Board
          </button>
        </div>

        <div className="px-3 pt-3 space-y-4">
          {brand.map((value) => (
            <div key={value} className="flex items-center gap-x-4">
              <div className="flex items-start gap-x-4">
                <img
                  src="https://placehold.co/50x50"
                  alt="Contact Image"
                  className="w-12 h-12 bg-gray-200 rounded"
                />
                <a href="#" className="text-h3Color">
                  Board {value}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 pb-2 text-right">
          <button
            onClick={() => {
              if (brand.length === 3) {
                setBrand([...brand, ...newArray]);
              } else {
                setBrand(brand.slice(0, 3));
              }
            }}
            className="text-sm text-h3Color"
          >
            Show All
          </button>
        </div>
      </div>

      {/* Personal Progress */}
      <div className="bg-white rounded-lg">
        <div className="flex items-center justify-between p-2 pl-3 mb-2 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Personal Progress
          </h2>
          <a href="#" className="text-sm font-medium text-h3Color">
            Go to board
          </a>
        </div>

        <div className="px-3 pt-3 space-y-4">
          {personalProgress.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-x-3"
            >
              <img
                src={item.img}
                alt="Contact Image"
                className="w-12 h-12 rounded-3xl"
              />

              <div className="flex flex-col flex-grow max-w-72 gap-y-2">
                <p className="mx-auto text-sm leading-none text-center text-gray-600">
                  {item.title}
                </p>
                <div className="w-full rounded-md bg-stone-200">
                  <div
                    className="h-5 rounded-md flex-center"
                    style={{
                      width: `${item.progress}%`,
                      backgroundColor: item.color,
                    }}
                  >
                    <span className="text-sm font-semibold text-white">
                      {item.progress}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-4 h-6 bg-[#24303D] flex-center text-white">
                <Plus stroke="#fff" strokeWidth={2.5} />
              </button>
            </div>
          ))}
        </div>

        <div className="px-4 pb-2 text-right">
          <button className="text-sm text-h3Color">Show All</button>
        </div>
      </div>

      <div className="bg-white rounded-lg ">
        <div className="flex items-center justify-between p-2 pl-3 mb-2 border-b-2 mb:pl-2 gap-x-1">
          <h3 className="text-base font-bold text-h3Color">Tasks</h3>
          <div className="flex items-center gap-x-2">
            <input
              type="text"
              className="w-20 p-1 border rounded-md"
              name="todo"
              id="todo"
              placeholder="24 To Do"
            />
            <div className="h-3 border border-rock"></div>
            <button className="px-3 py-1 text-sm text-white rounded-md bg-blue">
              Done
            </button>
          </div>
          <button className="px-3 py-1 text-sm text-white rounded-md bg-cyan-600">
            Filter
          </button>
        </div>

        <div className="p-3 flex-center gap-x-3">
          <input
            type="text"
            className="w-full p-2 border border-black rounded-md min-w-20 max-w-80"
            name="todo"
            id="todo"
            placeholder="Add Your Next Tasks"
          />
          <button className="px-3 py-2 text-sm text-white bg-orange">
            Done
          </button>
        </div>

        <div className="p-3 space-y-3">
          {tasks.map((item, index) => (
            <button
              key={index}
              className="relative flex w-full p-2 pr-20 border mb:pr-14"
              style={{ borderColor: item.color }}
              onClick={(e) => {
                console.log(e.target);
                if (e.target.matches("button")) {
                  const currentTask =
                    e.target.querySelector("[type='checkbox']");
                  currentTask.checked = !currentTask.checked;
                }
              }}
            >
              <span className="truncate">{item.title}</span>
              <input
                type="checkbox"
                name="task"
                id="task"
                className="absolute mr-4 -translate-y-1/2 right-10 mb:right-5 top-1/2"
              />
              <a
                href="#"
                className="absolute leading-none -translate-y-1/2 right-2 top-1/2"
              >
                <Settings stroke="#337ab7" width={20} height={20} />
              </a>
            </button>
          ))}
        </div>

        <div className="px-3 pb-3 flex-center">
          <button className="px-3 py-1.5 text-gray-500 rounded-tl-md rounded-bl-md border border-gray-300">
            <MoveLeft width={20} height={20} strokeWidth={1.5} /> Previous
          </button>
          <button className="px-3 py-1.5 border border-gray-300 rounded-tr-md rounded-br-md text-cyan-500">
            Next <MoveRight width={20} height={20} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
