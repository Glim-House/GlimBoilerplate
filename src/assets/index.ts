import {lazy} from 'react';
import {FallBackUi, withIconSuspense} from '../utils/LazyLoaders/LazyIcons';

// * Svg Images
const PlaceHolderSvg = withIconSuspense(
  lazy(() => import('./images/svg/flower.svg')),
  FallBackUi,
);

// * Lottie Animations
const PlaceholderLottie = require('./animations/robot.json');

// * Static Image files
const Placeholderpng = require('./images/png/flower.png');

export {PlaceHolderSvg, PlaceholderLottie, Placeholderpng};
