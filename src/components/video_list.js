import React, { Component } from 'react'
import VideoListItem from './video_list_item.js'


export default class VideoList extends Component {
  constructor(props) {
    super(props)

    // this.state = {}
  }

  render() {
    const videoList = this.props.videos.map((video) => {
      return <VideoListItem
        key={video.etag}
        video={video}
        onVideoClick = {this.props.onVideoClick}
      />
    })

    return (
      <ul className="col-md-4" list-group>
        {videoList}
      </ul>
    )
  }
}

// const VideoList = ({ videos }) => {
// }

// export default VideoList
