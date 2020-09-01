import {banana, grape, apple } from './fruit';

const COLORS = [banana, grape, apple];
export function doThings() {
  return `${COLORS[0]} ${COLORS[1]} ${COLORS[2]}`
}