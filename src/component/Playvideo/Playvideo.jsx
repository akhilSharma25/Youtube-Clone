import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import video1 from  '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, valueConverter } from '../../Data'
import moment from 'moment'

export const Playvideo = ({videoId}) => {
  const [apiData,setApiData]=useState(null);

  const fetchVideoData=async()=>{
    //fetching video data 
    try {
      const videoDetailUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      const res = await fetch(videoDetailUrl);
      const data = await res.json();
      
      if (data.items && data.items.length > 0) {
        setApiData(data.items[0]);  // Access the first item in the items array
      } else {
        console.error("No video data found");
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }

  }

  useEffect(()=>{

    fetchVideoData()
  },[])
  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData?valueConverter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "N/A"}
        </p>
        <div>
          <span><img src={like} alt="" />{apiData?valueConverter(apiData.statistics.likeCount):"155"}</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={apiData?apiData.snippet.thumbnails.default.url:""} alt="" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:""}</p>
          <span>{apiData?valueConverter(apiData.statistics.subscriberCount):"1M"} Subscriber</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
        {/* <p>Subscribe the channel for new tutorial of coding</p> */}
        <hr />
        <h4>{apiData?valueConverter(apiData.statistics.commentCount):"102"} Comment</h4>
 

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Akhil Sharma <span>1 day ago</span></h3>
            <p>A global computer network providing a variety of information and connected networks using standardized communication protocols</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Akhil Sharma <span>1 day ago</span></h3>
            <p>A global computer network providing a variety of information and connected networks using standardized communication protocols</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Akhil Sharma <span>1 day ago</span></h3>
            <p>A global computer network providing a variety of information and connected networks using standardized communication protocols</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Akhil Sharma <span>1 day ago</span></h3>
            <p>A global computer network providing a variety of information and connected networks using standardized communication protocols</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
