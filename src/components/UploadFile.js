import React, { useRef, useState } from "react"
import { GrAttachment } from "react-icons/gr"

// FileUploader component
const UploadFile = () => {
  const [files, setFiles] = useState([])
  const [fileCount, setFileCount] = useState(0)
  const fileInputRef = useRef(null)

  // Handle file input change
  const handleFileChange = event => {
    const newFiles = Array.from(event.target.files).map(file => ({
      id: Math.random().toString(36).substring(7),
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file)
    }))
    setFiles(prevFiles => [...prevFiles, ...newFiles])
    setFileCount(prevCount => prevCount + newFiles.length)
  }

  // Trigger file input when icon is clicked
  const handleIconClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="file-uploader flex gap-2">
      <input type="file" multiple onChange={handleFileChange} ref={fileInputRef} className="hidden" />
      <button onClick={handleIconClick} className="attachment-button">
        <GrAttachment className="text-[16px] font-semibold" />
      </button>
      <p className="text-[16px] font-semibold">{fileCount}</p>
    </div>
  )
}

export default UploadFile
