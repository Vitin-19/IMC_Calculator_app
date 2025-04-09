import { View, TextInput, Button, StyleSheet,KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import Classification from "./Classification";
import Result from "./Results";
import IdealWeight from "./IdealWeight";

const FormIMC = () => {
    /* 
        Os useState de "peso" e "altura" deverão ser inicializados como null para que os
        placeholders dos inputs aprareçam corretamente
    */
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(null);
    const [pesos,setPesos] = useState(null); // A variável "pesos" será um array que receberá os valores do peso mínimo e máximo

    const calcularIMC = () => {
        if(!isNaN(peso) && !isNaN(altura)){
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        }
    };


    // Função para retornar o peso mínimo e máximo que o usuário deve ter com base na sua altura
    const minMaxWeight = () => {
        if(!isNaN(altura)){
            const alturaMetros = parseFloat(altura) / 100;
            const minWeight = 18.5 * (alturaMetros * alturaMetros);
            const maxWeight = 24.9 * (alturaMetros * alturaMetros);
            console.log(minWeight);
            console.log(maxWeight);

            setPesos([minWeight.toFixed(2),maxWeight.toFixed(2)]); 
            /* Armazena os valores no array "pesos" sendo a posição 0 o valor mínimo e a 1 o valor máximo  */
        }
    }

    // Criação do formulário
    return(
        /*
            A tag <KeyboardAvoidingView> é utilizada para evitar que o teclado corte o formulário e as respoatas
            apareçam corretamente na tela, ou seja, totalmente dentro da View cinza do formulário
        */
        <KeyboardAvoidingView>
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
                    {/*Retorno do IMC, da classificação do IMC e dos pesos ideias máximos e mínimos*/}
                    {imc && <Result imc={imc} /> }
                    {imc && <Classification imc={imc}/> }
                    {pesos && <IdealWeight pesos={pesos}/> }
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

//Estilos do formulário
const styles = StyleSheet.create({
    formContainer:{
        backgroundColor: "#0066ff",
        padding: 16,
        borderRadius: 10,
        minWidth:'97%',
        minHeight:'40%'
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
        color:"white"
    },
});

export default FormIMC;
