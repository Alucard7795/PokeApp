import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSafe: {
    flex: 1,
    padding: -50,
  },
  row: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
  },
  loader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    width: 200,
    padding: 15,
  },
});
