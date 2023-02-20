import videoInput from '../images/chatgptdemo.mp4'
import {createRef} from '@motion-canvas/core/lib/utils';
import { Video } from '@motion-canvas/2d/lib/components/Video';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Layout, Rect, Image} from '@motion-canvas/2d/lib/components';
import { bottomHalfHeight, width } from '../CONSTANTS';


export default makeScene2D(function* (view) {
  const videoRef = createRef<Video>();
 
  view.add(
  <Rect >
    <Video 
      ref={videoRef}
      src={videoInput}
      height={bottomHalfHeight}
      width={width}
    />
  </Rect>   
  );

  // videoRef().play();

  yield* videoRef().scale(1, 2).to(1, 1);

});