import videoInput from '../images/chatgptdemo.mp4'
import videoInputFromMe from '../images/chatgptintrome.mp4'
import {createRef} from '@motion-canvas/core/lib/utils';
import { Video } from '@motion-canvas/2d/lib/components/Video';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Layout, Rect, Image} from '@motion-canvas/2d/lib/components';
import { bottomHalfHeight, topHalfHeight, width } from '../CONSTANTS';


export default makeScene2D(function* (view) {
  const videoRef = createRef<Video>();
  const videoRefMe = createRef<Video>();

  view.add(
  <Rect >

  </Rect>   
  );

  videoRef().play();
  videoRefMe().play();

  yield* videoRef().scale(1, 30).to(1, 1);
  yield* videoRefMe().scale(1, 30).to(1, 1);

});