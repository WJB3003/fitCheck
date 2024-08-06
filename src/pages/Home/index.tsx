import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';

function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {[1, 11, 1, 1].map((fitPost, index) => (
          <View key={index}>
            <Image
              source={{uri: 'https://via.placeholder.com/150'}}
              style={styles.fitImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Username</Text>
              <Text style={styles.text}>Fit Description / Comment</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
