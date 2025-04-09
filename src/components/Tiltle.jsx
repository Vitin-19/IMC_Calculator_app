import { Text,StyleSheet } from "react-native";

// Função que retorna o título "Calculadora de IMC"
const Title = () => {
    return(
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color:"white"
    },
});


export default Title;

