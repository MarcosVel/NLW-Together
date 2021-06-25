import React from 'react';
import { Image, View, Text } from 'react-native';

import IllustratedImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

export function SignIn() {
  return (
    <View style={ styles.container }>
      <Image
        source={ IllustratedImg }
        style={ styles.image }
        resizeMode='stretch'
      />

      <View style={ styles.content }>
        <Text style={ styles.title }>
          Conecte-se{ `\n` }
          e organize suas{ `\n` }
          jogatinas
        </Text>

        <Text style={ styles.subtitle }>
          Crie grupos para jogar seus games{ `\n` }
          favoritos com seus amigos{ `\n` }
        </Text>

        <ButtonIcon
          title='Entrar com Discord'
          activeOpacity={ .8 }
        />
      </View>
    </View>
  );
}
