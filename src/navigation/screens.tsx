import {lazy} from 'react';
import {PageFallBackUi, withPageSuspense} from '../utils/LazyLoaders/LazyPage';

const LazyOnboardScreen = withPageSuspense(
  lazy(() => import('../screens/onboard/Onboard.Screen')),
  PageFallBackUi,
);

const LazyHomeScreen = withPageSuspense(
  lazy(() => import('../screens/home/Home.screen')),
  PageFallBackUi,
);

export {LazyOnboardScreen, LazyHomeScreen};
