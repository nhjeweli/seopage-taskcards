import React from "react"
import CardDetails from "./CardDetails"
import { titleData } from "../data"

const Card = () => {
  const { incomplete, todo, doing, underReview, completed, overd, count } = titleData

  return (
    <div className="flex gap-4 p-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-grey-100 scrollbar-corner-blue-700">
      {/** Card 1 */}
      <div className="bg-grey p-4 w-[500px] relative">
        <div className="flex justify-between mt-2 mb-2">
          <div className="absolute z-10 top-7 left-5 bg-red-500 w-6 h-6 rounded-s-full"></div>
          <h3 className="text-accent text-[18px] relative left-8 font-semibold">{incomplete}</h3>
          <span className="text-accent text-center w-8 h-8 text-[18px] bg-gray-200 px-2 rounded-sm font-semibold">{count}</span>
        </div>

        <div className="scrollbar-thumb-sky-600 scrollbar-track-grey-100 scrollbar-corner-blue-700 scrollbar-thumb-rounded-full">
          <div className="scrollbar-thin h-[850px] overflow-y-scroll scrollbar-corner-full">
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
          </div>
        </div>
      </div>

      {/** Card 2 */}
      <div className="bg-grey p-4 w-[500px] relative">
        <div className="flex justify-between mt-2 mb-2">
          <div className="absolute top-7 left-5 bg-blue-400 w-6 h-6 rounded-s-full"></div>
          <h3 className="text-accent text-[18px] relative left-8 font-semibold">{todo}</h3>
          <span className="text-accent text-center w-8 h-8 text-[18px] bg-gray-200 px-2 rounded-sm font-semibold">{count}</span>
        </div>
        <div className="scrollbar-thumb-sky-600 scrollbar-track-grey-100 scrollbar-corner-blue-700 scrollbar-thumb-rounded-full">
          <div className="scrollbar-thin h-[850px] overflow-y-scroll">
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
          </div>
        </div>
      </div>

      {/** Card 3 */}
      <div className="bg-grey p-4 w-[500px] relative">
        <div className="flex justify-between mt-2 mb-2">
          <div className="absolute top-7 left-5 bg-yellow-400 w-6 h-6 rounded-s-full"></div>
          <h3 className="text-accent text-[18px] relative left-8 font-semibold">{doing}</h3>
          <span className="text-accent text-center w-8 h-8 text-[18px] bg-gray-200 px-2 rounded-sm font-semibold">{count}</span>
        </div>
        <div className="scrollbar-thumb-sky-600 scrollbar-track-grey-100 scrollbar-corner-blue-700 scrollbar-thumb-rounded-full">
          <div className="scrollbar-thin h-[850px] overflow-y-scroll">
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
          </div>
        </div>
      </div>

      {/** Card 4 */}
      <div className="bg-grey p-4 w-[500px] relative">
        <div className="flex justify-between mt-2 mb-2">
          <h3 className="text-accent text-[18px] relative left-8 font-semibold">{underReview}</h3>
          <span className="text-accent text-center w-8 h-8 text-[18px] bg-gray-200 px-2 rounded-sm font-semibold">{count}</span>
        </div>
        <div className="scrollbar-thumb-sky-600 scrollbar-track-grey-100 scrollbar-corner-blue-700 scrollbar-thumb-rounded-full">
          <div className="scrollbar-thin h-[850px] overflow-y-scroll">
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
          </div>
        </div>
      </div>

      {/** Card 4 */}
      <div className="bg-grey p-4 w-[500px] relative">
        <div className="flex justify-between mt-2 mb-2">
          <h3 className="text-accent text-[18px] relative left-8 font-semibold">{completed}</h3>
          <span className="text-accent text-center w-8 h-8 text-[18px] bg-gray-200 px-2 rounded-sm font-semibold">{count}</span>
        </div>
        <div className="scrollbar-thumb-sky-600 scrollbar-track-grey-100 scrollbar-corner-blue-700 scrollbar-thumb-rounded-full">
          <div className="scrollbar-thin h-[850px] overflow-y-scroll">
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
          </div>
        </div>
      </div>

      {/** Card 5 */}
      <div className="bg-grey p-4 w-[500px] relative">
        <div className="flex justify-between mt-2 mb-2">
          <h3 className="text-accent text-[18px] relative left-8 font-semibold">{overd}</h3>
          <span className="text-accent text-center w-8 h-8 text-[18px] bg-gray-200 px-2 rounded-sm font-semibold">{count}</span>
        </div>
        <div className="scrollbar-thumb-sky-600 scrollbar-track-grey-100 scrollbar-corner-blue-700 scrollbar-thumb-rounded-full">
          <div className="scrollbar-thin h-[850px] overflow-y-scroll">
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
            <CardDetails />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
