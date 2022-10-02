import React, { Component } from 'react'
import VideoItem from './VideoItem'

export default class VideoList extends Component {
  render() {
    return (
      <div className='ui list' >
        {
          this.props.videos.length > 0 &&  this.props.videos.map(video => (
            <VideoItem video={video} key={video.id} onVideoSelect={this.props.onVideoSelect}/>
          ))
        }
      </div>
    )
  }
}
