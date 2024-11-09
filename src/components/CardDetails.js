import React from "react"

import { BiSolidNotepad } from "react-icons/bi"
import { FaRegComments, FaLayerGroup, FaCalendarAlt } from "react-icons/fa"
import { avatarData } from "../data"
import UploadFile from "./UploadFile"

const Card = () => {
  const { username, username2, image1, image2, para, num, comment, date, numcount } = avatarData

  return (
    <div className="pt-4">
      <div className="min-h-[170px] bg-body p-4 rounded-md shadow-md">
        {/** top */}
        <div className="flex justify-between mt-1">
          <div className="flex gap-2 items-center">
            <img className="w-8 h-8 rounded-full" src={image1} alt={`${username}'s avatar`} />
            <span className="font-semibold text-[16px]">{username}</span>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-8 h-8 rounded-full" src={image2} alt={`${username2}'s avatar`} />
            <span className="font-semibold text-[16px]">{username2}</span>
          </div>
        </div>
        {/** middle */}
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-2">
            <FaLayerGroup />
            <span>{para}</span>
          </div>
          <div className="flex items-center gap-1 bg-gray-200 p-2 rounded-md">
            <BiSolidNotepad />
            <span className="text-[16px] font-semibold">{num}</span>
          </div>
        </div>
        {/** bottom */}
        <div className="flex justify-between items-center gap-4 mt-4">
          <div className="w-8 h-8">
            <img className="rounded-full" src={image1} alt={`${username}'s avatar`} />
          </div>
          <div className="w-8 h-8">
            <img className="rounded-full" src={image1} alt={`${username}'s avatar`} />
          </div>
          <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center">
            <p className="text-[16px] font-semibold">{numcount}</p>
          </div>
          <a href="#" className="flex gap-2 font-semibold items-center">
            <FaRegComments />
            <span>{comment}</span>
          </a>
          <UploadFile />

          <div className="flex items-center gap-2 font-semibold">
            <FaCalendarAlt />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
