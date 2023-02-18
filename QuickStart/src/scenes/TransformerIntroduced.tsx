import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Layout, Rect, Text, Image} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';
import { Vector2 } from '@motion-canvas/core/lib/types';
import { createSignal } from '@motion-canvas/core/lib/signals';
import transformerSVG from '../../public/images/transformer.svg'

export default makeScene2D(function* (view) {
    const imageRef = createRef<Image>();


  view.add(
    <>
      <Image 
        ref={imageRef}
        src={transformerSVG}
        scale={1}
       />
    </>,
  );

  yield* all(
    imageRef().scale(2.5, 1.5).to(2, 1.5),
    imageRef().absoluteRotation(90, 1.5).to(0, 1.5)
  );
});