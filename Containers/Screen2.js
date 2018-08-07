import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class Screen2 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Screen Two',
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=2`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }

  render() {
    return (
      <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
          <Text style={styles.title}>Hello Bro</Text>
          <Text style={styles.title}>Screen 2</Text>
      </View>
      <View>
          <Text style={styles.subtitle}>Powered by PT.SISI</Text>
      </View>
  </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#e67e22',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
      color: 'white',
      fontSize: 35,
      fontWeight: 'bold',
  },
  subtitle: {
      color: 'white',
      fontWeight: '200',
      paddingBottom: 20
  },
  titleWrapper:{
      justifyContent:'center',
      flex: 1
  },
})