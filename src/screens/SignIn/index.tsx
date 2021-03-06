import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View, Text } from 'react-native';

import IllustratedImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
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
            onPress={ handleSignIn }
          />
        </View>
      </View>
    </Background>
  );
}
