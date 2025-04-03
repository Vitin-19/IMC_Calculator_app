import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import Classification from "./Classification";
import Result from "./Results";
import IdealWeight from "./IdealWeight";

const FormIMC = () => {
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(null);
    const [pesos,setPesos] = useState(null)

    const calcularIMC = () => {
        if(peso && altura){
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        };
    };

    const minMaxWeight = () => {
        if(altura){
            const alturaMetros = parseFloat(altura) / 100;
            const minWeight = 18.5 * (alturaMetros * alturaMetros);
            const maxWeight = 24.9 * (alturaMetros * alturaMetros);
            console.log(minWeight);
            console.log(maxWeight);

            setPesos([minWeight.toFixed(2),maxWeight.toFixed(2)]);
        }
    }

    return(
        <View style={styles.formContainer}>
            <TextInput 
                style={styles.input}    
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput 
                style={styles.input}    
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={() => {calcularIMC(); minMaxWeight()}}/>
            <View>
                {imc && <Result imc={imc} /> }
                {imc && <Classification imc={imc}/> }
                {pesos && <IdealWeight pesos={pesos}/> }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer:{
        backgroundColor: "#f0f0f0",
        padding: 16,
        borderRadius: 10,
        width:'100%',
        height:'40%'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormIMC;
