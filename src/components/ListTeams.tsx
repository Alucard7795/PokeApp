import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PokemonCard} from '../components/PokemonCard';
import {Team} from '../interfaces/Team';

interface Props {
  teams: Team[];
  indentifier: string;
}

export const ListTeams = ({teams, indentifier}: Props) => {
  return (
    <ScrollView horizontal={true} key={indentifier} style={style.container}>
      {teams.map(pokemonTeam => {
        return (
          <View style={style.card}>
            <PokemonCard
              key={pokemonTeam.id}
              onPress={() => {}}
              uri={pokemonTeam.picture}
              title={pokemonTeam.pokemon_species.name}
              titleSize={200}
              width={110}
              height={125}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    width: 200,
    padding: 15,
  },
});
