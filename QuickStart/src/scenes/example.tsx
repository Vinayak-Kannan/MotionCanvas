import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Layout, Rect, Image} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';
import { Vector2 } from '@motion-canvas/core/lib/types';
import { createSignal } from '@motion-canvas/core/lib/signals';
import transformerSVG from '../images/transformer.svg'


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
