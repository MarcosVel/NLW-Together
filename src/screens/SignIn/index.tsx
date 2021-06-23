import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import { styles } from './styles';

export function SignIn() {

  const [ text, setText ] = useState('');

  return (
    <View style={ styles.container }>
      <Text>Open up App.tsx to start working on your app!</Text>

      <TextInput
        style={ styles.input }
        onChangeText={ setText }
      />
      {/* 1:10 */}
      <Text>
        Você digitou: { text }
      </Text>
    </View>
  );
}
