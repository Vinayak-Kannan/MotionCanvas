import {makeProject} from '@motion-canvas/core/lib';
import chatGPTDemo from './scenes/chatGPTDemo?scene';
import example from './scenes/example?scene';


export default makeProject({
  scenes: [chatGPTDemo, example],
  background: '#964B00',
});
