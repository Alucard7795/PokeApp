import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import database from '@react-native-firebase/database';
import {ScrollView} from 'react-native-gesture-handler';
import {ListTeams} from '../../components/ListTeams';
import {TeamObject} from '../../interfaces/Team';
import {style} from './Style';

export const TeamScreen = () => {
  useEffect(() => {
    getTeams();
  }, []);

  const [teams, setTeams] = useState<TeamObject>();

  const getTeams = () => {
    try {
      database()
        .ref('team')
        .on('value', snapshot => {
          setTeams(snapshot.val());
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <ScrollView style={style.container}>
      {teams &&
        Object.keys(teams).map(team => {
          return (
            <View>
              <Text>{teams[team].name}</Text>
              <ListTeams teams={teams[team].team} indentifier={team} />
            </View>
          );
        })}
    </ScrollView>
  );
};
