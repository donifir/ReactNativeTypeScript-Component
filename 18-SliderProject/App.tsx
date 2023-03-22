import React from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const App = () => (
  <View style={styles.container}>
    <View style={styles.wrapperContent}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={2}
        // showPagination
        data={colors}
        renderItem={({item}) => (
          <View style={[styles.child, {backgroundColor: item}]}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </View>
  </View>
);

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: 30, textAlign: 'center'},
  wrapperContent:{height:200}
});

export default App;
