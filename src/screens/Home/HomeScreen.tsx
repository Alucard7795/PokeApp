import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackParams} from '../../navigator/StackNavigator';
import {styles} from './Style';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/background_pokedex.jpeg')}
      style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('TeamScreen')}>
        <View style={styles.imageContainer}>
          <Text style={styles.text}>Ver Equipos</Text>
          <Image
            source={require('../../assets/teams_logo.webp')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RegionScreen')}>
        <View style={styles.imageContainer}>
          <Text style={styles.text}>Crear Equipo</Text>
          <Image
            source={require('../../assets/create_team_logo.jpeg')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};
