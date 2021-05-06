import React, {Component} from 'react';


class Video extends Component {
  render() {
      var mystyle = {
          opacity : "0.2"
      }
    return(
        <video  width={1700} height={1000} style={mystyle} autoPlay  muted loop>
          <source   src="http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"   type="video/mp4" />
        </video>
       
    );
  }
}

export default Video;
