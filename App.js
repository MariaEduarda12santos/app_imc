import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [peso,setPeso] = useState(0);
  const [altura,setAltura] =useState(0);
  const [imc,setImc] =useState(null);

  const calcularImc = () =>{
    var resultado =peso / (altura * altura)
    setImc(resultado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo Caluculo IMC</Text>
      <TextInput 
      placeholder="Peso"
      keyboardType="numeric"
      value={peso}
      onChangeText={(peso)=>setPeso(peso)}
      />

<TextInput 
      placeholder="Altura"
      keyboardType="numeric"
      value={altura}
      onChangeText={(altura)=>setAltura(altura)}
      />
      {imc&&(
      <Text style={styles.titulo}>Imc: {imc}</Text>
      )}
      <Button title="Calcular" onPress={()=>{calcularImc()} }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tiulo: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
