import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Team} from '../interfaces/Team';
import {PokemonCard} from './PokemonCard';

interface Props {
  team: Team[];
  onAddTeam: () => void;
  textName: string;
  setTextName: (text: string) => {};
}

export const GridTeam = ({team, onAddTeam, textName, setTextName}: Props) => {
  return (
    <View>
      <View style={style.container}>
        <TextInput
          style={style.textInput}
          placeholder="Team Name..."
          onChangeText={text => setTextName(text)}
          defaultValue={textName}
        />
        <TouchableOpacity onPress={onAddTeam}>
          <View>
            <Image
              style={style.tinyLogo}
              source={{
                uri: 'https://w7.pngwing.com/pngs/535/334/png-transparent-computer-icons-add-button-logo-number-add-button-thumbnail.png',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={style.container}>
        {team.map(pokemon => {
          return (
            <View style={style.card}>
              <PokemonCard
                key={pokemon.id}
                onPress={() => {}}
                uri={pokemon.picture}
                title={pokemon.pokemon_species.name}
                titleSize={0}
                width={50}
                height={80}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  card: {
    width: 50,
    marginHorizontal: 5,
  },
  textInput: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    color: 'black',
    backgroundColor: '#D7D7D7',
    alignSelf: 'center',
    marginLeft: 5,
  },
});
