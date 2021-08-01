import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  // const uri = 'https://1.bp.blogspot.com/-J1O3S2IqAY8/XOLDybXlCII/AAAAAAAAAO8/a3xMb5V1v-Ab71QhwM1ik2u8w365gM6sQCLcBGAs/s1600/discord-512.png'
  const uri = 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/03/i8qztv1ucn3bhsttuz1q-1000x563.jpg'

  return (
    <Image
      source={ { uri } }
      style={ styles.image }
      resizeMode='cover'
    />
  )
}
