import React from 'react'
import './VideoItem.css'


export default function VideoItem({ video, onVideoSelect}) {
  return (
    <div className='videoItem item' onClick={() => onVideoSelect(video) }>
      <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}></img>
      <div className="content">
        <div className='header'>{ video.snippet.title}</div>
      </div>
    </div>
  )
}
