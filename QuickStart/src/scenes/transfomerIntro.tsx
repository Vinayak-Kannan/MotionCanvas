import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Layout, Text, Rect, Image} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all, waitFor} from '@motion-canvas/core/lib/flow';
import { Direction, Vector2 } from '@motion-canvas/core/lib/types';
import { createSignal } from '@motion-canvas/core/lib/signals';
import transformerSVG from '../images/transformer.svg'
import {slideTransition} from "@motion-canvas/core/lib/transitions";
import { easeOutElastic } from '@motion-canvas/core/lib/tweening';
import { width } from '../CONSTANTS';


export default makeScene2D(function* (view) {
  const imageRef = createRef<Image>();
  const textRef = createRef<Text>();


  view.add(
    <Rect layout
      direction={"column"}
      gap={250}
      justifyContent={"center"}
      alignItems={"center"}
      fontFamily={'Martian Mono'}
      fontSize={50}
    >
      <Rect
        // width={"33%"}
      >
        <Text
          fill={"white"}
        >"Crimson Chin!"</Text>
      </Rect>
      
      <Rect
        direction={"column"}
        gap={150}
        justifyContent={"center"}
        alignItems={"center"}
        // width={"33%"}
        marginTop={50}
      >
        <Image 
          ref={imageRef}
          src={transformerSVG}
          scale={15}
          rotation={0}
          opacity={0}
        />
        <Rect>
          <Text
            fill={"white"}
            ref={textRef}
            opacity={0}
            scale={0.5}
          >
            Transformer
          </Text>
        </Rect>
      </Rect>
      <Rect
        // width={"33%"}
      >
        <Text
          fill={"white"}
        >"Crims on Ch in !"</Text>
      </Rect>
    </Rect>
    ,
  );

  // perform a slide transition to the right:
  yield* slideTransition(Direction.Right);

  // proceed with the animation
  yield* waitFor(0.5);


  yield* all(
    imageRef().absoluteRotation(0, 0.5).to(270, 5, easeOutElastic),
    imageRef().opacity(0,0).to(1,1),
    textRef().opacity(0,0).to(1,1),
    textRef().scale(0.5,0).to(1.2,1).to(1,1)
  );
});
