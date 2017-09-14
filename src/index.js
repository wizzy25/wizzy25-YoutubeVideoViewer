import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import { debounce } from 'lodash'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail.js'
import key from '../config'

class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
      term: '',
    }

    this.videoSearch()
  }

  videoSearch(term) {
    YTSearch({ key, term }, (videos) => {
      this.setState({ videos, selectedVideo: videos['0'] })
    })
  }

  setVideo(selectedVideo) {
    this.setState({ selectedVideo })
  }

  render() {
    const debounced = debounce((searchTerm) => {this.videoSearch(searchTerm)}, 200)

    return (
      <div>
        <SearchBar onTextEnter={debounced}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoClick={selectedVideo => this.setVideo(selectedVideo)}
        />
      </div>
    )
  }
}

// Generate the HTML and render it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
