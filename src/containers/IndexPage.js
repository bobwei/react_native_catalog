'use strict';

import React from 'react';
import {
  View,
  MapView
} from 'react-native';


export default class IndexPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 24.9837193,
            longitude: 121.5427091,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
          }}
          overlays={[{
            coordinates:[
              {latitude: 24.9787661, longitude: 121.5536013},
              {latitude: 24.9887661, longitude: 121.5536013},
              {latitude: 24.9987661, longitude: 121.5536013},
              {latitude: 25.0087661, longitude: 121.5536013}
            ],
            strokeColor: '#f007',
            lineWidth: 4
          }]}
        />
      </View>
    );
  }
}
