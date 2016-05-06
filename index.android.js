'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/stores/configureStore';
import MapviewPageAndroid from './src/containers/MapviewPageAndroid';

const store = configureStore();


class ReactNativeCatalog extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          style={styles.container}
          itemWrapperStyle={styles.itemWrapperStyle}
          initialRoute={{
            title: 'Hello World',
            index: 0
          }}
          renderScene={(route) => {
            if (route.index === 0) {
              return <MapviewPageAndroid />;
            }
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

AppRegistry.registerComponent('react_native_catalog', () => ReactNativeCatalog);
