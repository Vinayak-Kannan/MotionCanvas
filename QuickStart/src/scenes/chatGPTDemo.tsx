import videoInput from '../images/chatgptdemo.mp4'
import {createRef} from '@motion-canvas/core/lib/utils';
import { Video } from '@motion-canvas/2d/lib/components/Video';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';


export default makeScene2D(function* (view) {
  const videoRef = createRef<Video>();

  view.add(<Video ref={videoRef} src={videoInput} />);

  videoRef().play();
  yield* videoRef().scale(1, 30).to(1, 1);

});