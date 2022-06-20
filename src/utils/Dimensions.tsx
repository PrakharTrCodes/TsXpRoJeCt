import {Dimensions, PixelRatio} from 'react-native';
export const SCREEN_WIDTH = Dimensions.get('window').width;


const scale = SCREEN_WIDTH / 375;

export function normalize(size: number) {
  return PixelRatio.roundToNearestPixel(size * scale);
}


export default {
   
    normalize,
   
  };