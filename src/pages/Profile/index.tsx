import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';

function Profile(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Username</Text>
        <View style={styles.attributesContainer}>
          <View style={styles.followersContainer}>
            <Text style={styles.followersTitle}>Followers</Text>
            <Text style={styles.followersSubtitleTitle}>1</Text>
          </View>
          <View style={styles.followersContainer}>
            <Text style={styles.followersTitle}>Following</Text>
            <Text style={styles.followersSubtitleTitle}>1</Text>
          </View>
          <View style={styles.followersContainer}>
            <Text style={styles.followersTitle}>Outfits</Text>
            <Text style={styles.followersSubtitleTitle}>1</Text>
          </View>
        </View>
        <View style={styles.fitContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((fit, index) => (
            <View key={index}>
              <Image
                source={{uri: 'https://via.placeholder.com/150'}}
                style={styles.fitPreviewImage}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
