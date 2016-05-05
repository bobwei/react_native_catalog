'use strict';

import React from 'react';
import {
  View,
  MapView
} from 'react-native';


export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: []
    };
  }

  onRegionChange(region) {
    let { latitude, longitude } = region;
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        { latitude, longitude }
      ]
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          onRegionChange={this.onRegionChange.bind(this)}
          region={{
            latitude: 24.9837193,
            longitude: 121.5427091,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          overlays={[{
            coordinates:this.state.coordinates,
            strokeColor: '#f007',
            lineWidth: 4
          }]}
        />
      </View>
    );
  }
}
