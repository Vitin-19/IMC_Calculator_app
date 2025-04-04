import { StyleSheet, View } from 'react-native';
import Title from './src/components/Tiltle';
import FormIMC from './src/components/FormIMC';

// Função para carregar a tela

function App() {
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
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
});

export default App;