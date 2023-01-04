import React from 'react';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigation/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </>
  );
};

export default App;
