import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Layout, Rect, Text} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';
import { Vector2 } from '@motion-canvas/core/lib/types';
import { createSignal } from '@motion-canvas/core/lib/signals';

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();
  const signal = createSignal("Hello")
  const value = signal()

  view.add(
    <>
      <Layout
        x={-300}
        y={-20}
      >
        <Text>{value}</Text>
      </Layout>
        <Circle
          ref={myCircle}
          x={-300}
          width={240}
          height={240}
          y={100}
          fill="#e13238"
        />
    </>,
  );

  yield* all(
    myCircle().position.x(-300, 1).to(300, 1),
    signal("Goodbye", 2)
  );
});
