import React from 'react'
import "./Video.css"
import { Playvideo } from '../../component/Playvideo/Playvideo'
import Recommend from '../../component/Recommmend/Recommend'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoId,categoryId}=useParams();
  return (
    <div className='play-container'>

    <Playvideo videoId={videoId} />
    <Recommend/>
    </div>
  )
}

export default Video