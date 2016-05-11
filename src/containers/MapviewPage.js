'use strict';

import React from 'react';
import {
  View,
  MapView,
  TouchableOpacity,
  Text,
  DeviceEventEmitter
} from 'react-native';
import RNLocation from 'react-native-location';

import { GEOLOCATION_OPTIONS } from '../data';
import { styles } from '../styles/MapviewPage';


export default class MapviewPage extends React.Component {
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

  componentDidMount() {
    RNLocation.requestAlwaysAuthorization();
    RNLocation.setDistanceFilter(1);
    var subscription = DeviceEventEmitter.addListener(
      'locationUpdated',
      (location) => {
        console.log(location);
        let { coords: { latitude, longitude } } = location;
        this.addCoordinateToOverlay({ latitude, longitude });
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onToggleRecordingLocation() {
    this.setState({ isRecordingLocation: !this.state.isRecordingLocation });
    if (this.state.isRecordingLocation) {
      RNLocation.startUpdatingLocation();
    } else {
      RNLocation.stopUpdatingLocation();
    }
  }

  /*
  onRegionChange(region) {
    if (this.state.isRecordingLocation) {
      let { latitude, longitude } = region;
      this.addCoordinateToOverlay({ latitude, longitude });
    }
  }
  */

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          // onRegionChange={this.onRegionChange.bind(this)}
          showsUserLocation={true}
          followUserLocation={true}
          region={{
            ...{
              latitude: 0,
              longitude: 0,
              ...this.state.coordinates[0]
            },
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
