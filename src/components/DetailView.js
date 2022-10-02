import React from 'react'
import './DetailView.css'

export default function DetailView({ video }) {
  if (!video) {
    return (
      <div className="loading">
        loading...
      </div>

    )
  }

  return (
    <div className='detailView'>
      { video && (
        <div>
          <div className='ui embed'>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          <div className='detailView-content'>
            <div className="content">
              <div className='header'>{ video.snippet.title}</div>
              <div className="description"  dangerouslySetInnerHTML={{ __html: video.snippet.description }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
