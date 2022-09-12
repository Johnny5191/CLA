import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Animated } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}> 
      <View style={styles.containerLogo}>
        <Image
          source={require('./assets/logo.png')}
        />
      </View>
      
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCorrect={false}
            onChangeText={()=> {}}
          />
    
          <TextInput
            style={styles.input}
            placeholder='Senha'
            autoCorrect={false}
            onChangeText={()=> {}}
          />
      

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.textBtnSubmit}>Acessar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.textBtnRegister}>Criar conta</Text>
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}   

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    // backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',

  },
  input: {
    backgroundColor:'red',
    width: '90%',
    marginBottom: 15,
    color:'#222',
    fontSize: 17,
    borderRadius:7,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: 'blue',
    width: '90%',
    height: 45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
  },
  textBtnSubmit:{
    color:'#FFF',
    fontSize: 18,
  },
  btnRegister:{
    // backgroundColor: 'blue',
    // widht: '90%',
    // height: 45,
    // alignItens:'center',
    // justifyContent:'center',
    // borderRadius:7,
    marginTop: 10
  },
  textBtnRegister:{
    // color:'#FFF',
    // fontSize: 18,
  },
})
