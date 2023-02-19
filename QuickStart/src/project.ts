import {makeProject} from '@motion-canvas/core/lib';
import chatGPTDemo from './scenes/chatGPTDemo?scene';
import example from './scenes/example?scene';


export default makeProject({
  scenes: [example, chatGPTDemo],
  background: '#964B00',
});
