import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'


export default function TelaLogin({ navigation }) {
  return (
    <View>
      <View style={styles.espacamento}>
        <TextInput label='Email' mode='outlined'></TextInput>
      </View>
      <View style={styles.espacamento}>
        <TextInput label='Senha' mode='outlined'></TextInput>
      </View>
      <Button icon='camera' title="Entrar" mode='contained' 
      onPress={() => navigation.navigate('TelaDeLista')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  espacamento:{
    paddingBottom: 15
  },

  borda:{
    borderRadius: 40
  }

})