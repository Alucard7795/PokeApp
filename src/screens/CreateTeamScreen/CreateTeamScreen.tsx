import React, {useReducer, useState} from 'react';
import {ActivityIndicator, View, Alert} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParams} from '../../navigator/StackNavigator';
import {FlatList} from 'react-native-gesture-handler';
import {PokemonCard} from '../../components/PokemonCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {usePokedexFetch} from '../../hooks/usePokedexFetch';
import {GridTeam} from '../../components/GridTeam';
import {addTeam, deleteTeam} from '../../actions/teamActions';
import {teamReducer} from '../../reducers/teamReducer';
import database from '@react-native-firebase/database';
import {style} from './Style';

interface Props extends StackScreenProps<RootStackParams, 'CreateTeamScreen'> {}

export const CreateTeamScreen = ({navigation, route}: Props) => {
  const {url} = route.params;

  const [textName, setTextName] = useState('');
  const [team, dispatch] = useReducer(teamReducer, []);

  const {simplePokemonList, isLoading} = usePokedexFetch(url);

  const onAddTeam = () => {
    if (team.length < 3) {
      validateAlert();
    } else {
      try {
        const newReference = database().ref('team').push();

        newReference.set({name: textName, team});
        dispatch(deleteTeam([]));
        navigation.navigate('TeamScreen');
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const validateAlert = () => {
    Alert.alert('Minimum team size 3', 'Please add more Pokemons!', [
      {text: 'OK'},
    ]);
  };

  if (isLoading && simplePokemonList.length === 0) {
    return (
      <View style={[style.container, style.loader]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <SafeAreaView style={style.containerSafe}>
        {team.length >= 1 && (
          <GridTeam
            team={team}
            onAddTeam={onAddTeam}
            textName={textName}
            setTextName={setTextName}
          />
        )}
        <FlatList
          data={simplePokemonList}
          numColumns={2}
          columnWrapperStyle={style.row}
          horizontal={false}
          renderItem={({item}) => (
            <View style={style.card}>
              <PokemonCard
                onPress={() => dispatch(addTeam(item))}
                uri={item.picture}
                title={item.pokemon_species.name}
                titleSize={200}
                width={150}
                height={175}
              />
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};
