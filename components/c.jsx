import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SimpleCarousel, Banner } from 'react-native-simple-banner-carousel';

export default function MyCarousel() {
  return (
    <View style={styles.container}>
      <View style={{
        paddingVertical: 12,
        width: '100%',
        backgroundColor: '#fff',
      }}>
        <SimpleCarousel 
          data={[{
              title: 'Hokkaido',
              source: require('../assets/profile.png'),
            },
            {
              title: 'Tokyo',
              source: require('../assets/profile.png'),
            },
            {
              title: 'Osaka',
              source: require('../assets/profile.png'),
            },
            {
              title: 'Kyoto',
              source: require('../assets/profile.png'),
            },
            {
              title: 'Shimane',
              source: require('../assets/profile.png'),
            }
          ]}
          renderItem={(props, i, width) => {
            return (
              <Banner id={`${props.title}_${i}`} source={props.source} width={width} onPress={(id) => console.log(`${id} was tapped.`)} />
            )
          }} 
        />
      </View>
      <StatusBar translucent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});