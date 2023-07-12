import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View,Text } from 'react-native';

export default function Maps() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}initialRegion={{
    latitude: -34.6037,
    longitude:  -58.3816,
    latitudeDelta: 10,
    longitudeDelta: 10,
  }} />
  <Marker
  coordinate={{
    latitude:-34.6037,
    longitude:  -58.3816,
  }}
  pinColor="red">
    <Callout>
        <Text> ACA</Text>
    </Callout>
  </Marker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


