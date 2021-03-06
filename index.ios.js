'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/stores/configureStore';
import MapviewPage from './src/containers/MapviewPage';

const store = configureStore();


class ReactNativeCatalog extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          navigationBarHidden={false}
          style={styles.container}
          itemWrapperStyle={styles.itemWrapperStyle}
          initialRoute={{
            title: 'Hello World',
            component: MapviewPage
          }}
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemWrapperStyle: {}
});

AppRegistry.registerComponent('ReactNativeCatalog', () => ReactNativeCatalog);
