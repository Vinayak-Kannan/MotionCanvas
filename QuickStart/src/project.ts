import {makeProject} from '@motion-canvas/core/lib';
import chatGPTDemo from './scenes/chatGPTDemo?scene';
import example from './scenes/example?scene';
import transfomerIntro from './scenes/transfomerIntro?scene';

import './global.css'
import { bottomHalfHeight, width } from './CONSTANTS';
import { Vector2 } from '@motion-canvas/core/lib/types/Vector';

export default makeProject({
  scenes: [chatGPTDemo, transfomerIntro, example],
  background: '#964B00',
  size: new Vector2(bottomHalfHeight, width)
});
