import {makeProject} from '@motion-canvas/core/lib';
import TransformerIntroduced from './scenes/TransformerIntroduced?scene';

import example from './scenes/example?scene';

export default makeProject({
  scenes: [example],
  background: '#141414',
});
