import React, { useState } from 'react';
import { Image, View, Text, StatusBar } from 'react-native';

import IllustratedImg from '../../assets/illustration.png';
import { styles } from './styles';

export function SignIn() {
  return (
    <View style={ styles.container }>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Image
        source={ IllustratedImg }
        style={ styles.image }
        resizeMode='stretch'
      />

      <View style={ styles.content }>
        <Text style={ styles.title }>
          Organize{ `\n` }
          suas jogatinas{ `\n` }
          facilmente
        </Text>

        <Text style={ styles.subtitle }>
          Crie grupos para jogar seus games{ `\n` }
          favoritos com seus amigos{ `\n` }
        </Text>
      </View>
    </View>
  );
}
