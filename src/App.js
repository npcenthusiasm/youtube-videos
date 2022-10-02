import React, { Component } from 'react'
import './App.css';
import DetailView from './components/DetailView';
// import Searchbar from './components/Searchbar'
import VideoList from './components/VideoList';

import { getPlaylistItems } from './apis/youtubeApi';
import replaceToBr from './utils/replaceToBr';

export default class App extends Component {

  state =  {
    selectVideo: null,
    videos: []
  }

  componentDidMount () {
    this.handleSubmitSearch()
  }

  handleSubmitSearch = async (term) => {
    
    const result = await getPlaylistItems().then((res) => {
    // const result = await searchVideo(term).then((res) => {
      res.data.items.forEach(it => {
        it.snippet.description = replaceToBr(it.snippet.description)
      })
      return res
    })
    
    this.setState({
      videos: result.data.items,
      selectVideo: result.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectVideo: video })
  }

  render() {
    return (
      <div>
        <div className="" style={{ backgroundColor: '#202020', height: '50px'}}>
        </div>
        <div className="ui container" style={{ marginTop: '20px'}}>

          {/* <Searchbar handleSubmitSearch={this.handleSubmitSearch} /> */}
          <div className='ui grid'  style={{ marginTop: '20px'}}>
            <div className='ui row'>
              <div className='eleven wide column'>
                <DetailView video={this.state.selectVideo} />
              </div>
              <div className='five wide column'>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

