import React, {useEffect, useState} from 'react';
import {ImageBackground, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {reqResApi} from '../../api/reqRes';
import {PokemonCard} from '../../components/PokemonCard';
import {style} from './Style';

export const RegionScreen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    getRegions();
  }, []);

  const [regions, setRegions] = useState([]);

  const getRegions = async () => {
    try {
      const resp = await reqResApi.get<any>('/api/v2/region/');
      if (resp.data) {
        setRegions(resp.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background_pokedex.jpeg')}
      style={style.container}>
      <SafeAreaView style={style.containerSafe}>
        <FlatList
          data={regions}
          numColumns={2}
          columnWrapperStyle={style.row}
          horizontal={false}
          renderItem={({item}: any) => (
            <View style={style.card}>
              <PokemonCard
                onPress={() => navigator.navigate('PokedexRegionScreen', item)}
                title={item.name}
                uri={
                  'https://www.freepnglogos.com/uploads/pokemon-go-png-logo/pokemon-go-mewtwo-generator-png-logo-18.png'
                }
                titleSize={200}
                width={150}
                height={175}
              />
            </View>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
