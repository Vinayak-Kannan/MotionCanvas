import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Layout, Rect, Text, Image} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import transformerSVG from '../../images/transformer.svg'


export default makeScene2D(function* (view) {
  const imageRef = createRef<Image>();


  view.add(
    <>
      <Image 
        ref={imageRef}
        src={transformerSVG}
        scale={10}
        rotation={0}
       />
    </>,
  );

  yield* (
    imageRef().absoluteRotation(0, 0).to(360, 2)
  );
});