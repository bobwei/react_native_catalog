'use strict';

import React from 'react';
import {
  View,
  MapView,
  TouchableOpacity,
  Text
} from 'react-native';
import { styles } from '../styles/IndexPage';


export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecordingLocation: false,
      coordinates: []
    };
  }

  addCoordinateToOverlay(coordinate) {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        coordinate
      ]
    });
  }

  onToggleRecordingLocation() {
    this.setState({ isRecordingLocation: !this.state.isRecordingLocation });
  }

  onRegionChange(region) {
    if (this.state.isRecordingLocation) {
      let { latitude, longitude } = region;
      this.addCoordinateToOverlay({ latitude, longitude });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          onRegionChange={this.onRegionChange.bind(this)}
          showsUserLocation={true}
          region={{
            latitude: 24.9837193,
            longitude: 121.5427091,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          overlays={[{
            coordinates:this.state.coordinates,
            strokeColor: '#007AFF',
            lineWidth: 9
          }]}
        />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={this.onToggleRecordingLocation.bind(this)}>
            <Text style={styles.buttonText}>
              {(!this.state.isRecordingLocation)?'Start': 'Complete'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
