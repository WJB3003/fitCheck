import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  profileImage: {
    height: '50%',
    width: 300,
    aspectRatio: 1,
    marginHorizontal: 'auto',
    marginVertical: 16,
    borderRadius: 150,
  },
  container: {
    backgroundColor: 'black',
    // justifyContent: 'center',
    textAlign: 'center',
    height: '100%',
  },
  username: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  followersContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  followersTitle: {
    color: 'white',
    fontSize: 24,
  },
  followersSubtitleTitle: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  attributesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fitPreviewImage: {
    width: 100,
    aspectRatio: 1,
    // marginVertical: 16,
  },
  fitContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
  },
});
