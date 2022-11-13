import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  card: {
    width: 200,
    padding: 15,
  },
  container: {
    flex: 1,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  containerSafe: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#4796e9',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
});
