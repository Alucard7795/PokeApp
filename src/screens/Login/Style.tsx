import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginHorizontal: 50,
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
