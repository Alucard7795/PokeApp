import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  height?: number;
  width?: number;
  uri: string;
  title?: string;
  titleSize?: number;
  onPress: () => void;
}

export const PokemonCard = ({
  uri,
  title,
  titleSize,
  onPress,
  height = 420,
  width = 300,
}: Props) => {
  return (
    <View>
      <Text numberOfLines={1} style={{...styles.text, width: titleSize}}>
        {' '}
        {title}
      </Text>
      <TouchableOpacity
        style={{...styles.button, width, height}}
        onPress={onPress}
        activeOpacity={0.8}>
        <View style={styles.imageContainer}>
          <Image
            source={
              uri.includes('http') ? {uri} : require('../assets/pokeball.png')
            }
            style={{...styles.image, width, height}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
  text: {
    fontSize: 22,
    fontFamily: 'arial',
    width: 280,
    color: 'red',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  button: {
    paddingBottom: 10,
  },
});
