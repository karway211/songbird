import React, { Component } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidUpdate() {
    const { isNext } = this.props;
    if (isNext) {
      this.ref.audio.current.pause();
    }
  }

  render() {
    const { audio } = this.props;
    return (
      <ReactAudioPlayer
        layout="horizontal-reverse"
        customAdditionalControls={[]}
        autoPlayAfterSrcChange={false}
        showJumpControls={false}
        autoPlay={false}
        src={audio}
        ref={ elem => this.ref = elem }
      />
    );
  }
}
