'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  StatusBarIOS
} from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/stores/configureStore';
import IndexPage from './src/containers/IndexPage';

const store = configureStore();


class ReactNativeCatalog extends React.Component {
  componentDidMount() {
    StatusBarIOS.setStyle('light-content');
  }

  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          navigationBarHidden={false}
          style={styles.container}
          itemWrapperStyle={styles.itemWrapperStyle}
          initialRoute={{
            title: 'Hello World',
            component: IndexPage
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
