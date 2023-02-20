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
import arrowSVG from '../images/arrow.svg' 



export default makeScene2D(function* (view) {
  const topRect = createRef<Rect>()
  const topText = createRef<Text>()

  const topArrow = createRef<Image>()

  const middleRect = createRef<Rect>()
  
  const imageRef = createRef<Image>();
  const textRef = createRef<Text>();


  view.add(
    <Rect layout
      direction={"column"}
      gap={10}
      justifyContent={"center"}
      alignItems={"center"}
      fontFamily={'Martian Mono'}
      fontSize={50}
    >
      <Rect
        fill={"#614336"}
        radius={20}
        paddingLeft={15}
        paddingRight={15}
        paddingBottom={10}
        direction={"column"}
        opacity={0}
        ref={topRect}
      >
        <Rect>
          <Text
            fill={"white"}
            opacity={1}
            fontSize={20}
            ref={topText}
          >
            Input Text
          </Text>
        </Rect>
        <Text
          fill={"white"}
          fontSize={50}
          letterSpacing={0.1}
        >
          "Crimson Chin!"
        </Text>
      </Rect>

      <Image 
        src={arrowSVG}
        ref={topArrow}
      />
      
      <Rect
        direction={"column"}
        fill={"#614336"}
        radius={20}
        paddingLeft={15}
        paddingRight={15}
        ref={middleRect}
        opacity={0}
      >
        <Rect>
          <Text
            fill={"white"}
            ref={textRef}
            fontSize={20}
          >
            Transformer
          </Text>
        </Rect>
        <Rect
          marginBottom={-15}
          marginTop={-30}
        >
          <Image 
            ref={imageRef}
            src={transformerSVG}
            rotation={0}
          />
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
    middleRect().opacity(0,0).to(1,0.5),
    topArrow().position.x(300, 0).to(-300, 1),
  );

  // proceed with the animation
  yield* waitFor(3);

  yield* all(
    topRect().opacity(0,0).to(1,0.5),
    // imageRef().absoluteRotation(0, 0.5).to(270, 5, easeOutElastic),
  )

  // proceed with the animation
  yield* waitFor(2);

  // Combine text then send thorugh transformer
  yield* all(
    imageRef().absoluteRotation(0, 0).to(270, 3),
  )

});
