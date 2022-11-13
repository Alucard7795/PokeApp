import React, {useEffect, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParams} from '../../navigator/StackNavigator';
import {FlatList} from 'react-native-gesture-handler';
import {reqResApi} from '../../api/reqRes';
import {PokemonCard} from '../../components/PokemonCard';
import {style} from './Style';

interface Props
  extends StackScreenProps<RootStackParams, 'PokedexRegionScreen'> {}

export const PokedexRegionScreen = ({route, navigation}: Props) => {
  const {url} = route.params;

  const [pokedexes, setPokedexes] = useState([]);

  useEffect(() => {
    getPokedex();
  }, []);

  const getPokedex = async () => {
    const resp = await reqResApi.get<any>(url);
    if (resp.data) {
      setPokedexes(resp.data.pokedexes);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background_pokedex.jpeg')}
      style={style.container}>
      <SafeAreaView style={style.containerSafe}>
        <FlatList
          data={pokedexes}
          numColumns={2}
          columnWrapperStyle={style.row}
          horizontal={false}
          renderItem={({item}: any) => (
            <View style={style.card} key={item.id}>
              <PokemonCard
                onPress={() => navigation.navigate('CreateTeamScreen', item)}
                uri={''}
                title={item.name}
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
