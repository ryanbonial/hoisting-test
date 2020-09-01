import {banana, grape, apple } from './fruit';

import * as idx from './index';

console.log(idx.greeting)
const COLORS = [banana, grape, apple];
export function doThings() {
  return `${COLORS[0]} ${COLORS[1]} ${COLORS[2]}`
}