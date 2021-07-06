import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://1.bp.blogspot.com/-J1O3S2IqAY8/XOLDybXlCII/AAAAAAAAAO8/a3xMb5V1v-Ab71QhwM1ik2u8w365gM6sQCLcBGAs/s1600/discord-512.png'

  return (
    <Image
      source={ { uri } }
      style={ styles.image }
      resizeMode='cover'
    />
  )
}
