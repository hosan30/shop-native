import {StyleSheet, Animated, View, Dimensions, Text} from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../util/styles';

const {width} = Dimensions.get('screen');

const Pagination = ({data, scrollX, index}) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.1],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', '#000', '#ccc'],
          extrapolate: 'clamp',
        });

        return (
          <View    key={idx.toString()}> 
          {idx !== index &&  
          <Animated.View
        
            style={[
              styles.dot,
              {width: dotWidth, backgroundColor},
              // idx === index && styles.dotActive,
            ]}
          />}
          {idx === index &&       <Text style={[ styles.dotActive,{ fontSize: 10, color: 'white', paddingHorizontal: 5, borderRadius: 6}]} >{index+1}/ {data.length}</Text>
}
          </View>
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
  },
  dotActive: {
    backgroundColor: '#484848',
  },
});