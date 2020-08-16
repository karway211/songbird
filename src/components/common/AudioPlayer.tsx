import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './AudioPlayer.css';

type PropsType = {
  audio: string
  isResponse?: null | boolean
}

const AudioPlayer: React.FC<PropsType> = ({isResponse, audio}) => {

  let [ref, setRef] = useState(null as null | ReactAudioPlayer);

  useEffect(() => {
    if (isResponse && ref?.audio.current) {
      ref.audio.current.pause();
    }
  })

  return (
    <ReactAudioPlayer
      layout="horizontal-reverse"
      customAdditionalControls={[]}
      autoPlayAfterSrcChange={false}
      showJumpControls={false}
      autoPlay={false}
      src={audio}
      ref={ (elem: ReactAudioPlayer) => setRef(ref = elem) }
    />
  );
}


// export default class AudioPlayer extends Component {
//   constructor(props) {
//     super(props);
//     this.ref = null;
//   }

//   componentDidUpdate() {
//     const { isResponse } = this.props;
//     if (isResponse) {
//       this.ref.audio.current.pause();
//     }
//   }

//   render() {
//     const { audio } = this.props;
//     return (
//       <ReactAudioPlayer
//         layout="horizontal-reverse"
//         customAdditionalControls={[]}
//         autoPlayAfterSrcChange={false}
//         showJumpControls={false}
//         autoPlay={false}
//         src={audio}
//         ref={ elem => this.ref = elem }
//       />
//     );
//   }
// }

export default AudioPlayer;
