import { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";


// Função que retorna a classificação do IMC junto com um texto 
const Classification = ({imc}) => {
    let [classification,setClassification] = useState(null);

    /* Utilização do useEffect para que a classificação do IMC aparece junto ao resultado e ao peso correto,
    premitindo que apareça todos os retornos corretamentes*/
    useEffect(() => {
        switch (true){
            case imc < 18.5:
                setClassification("Abaixo do peso");
            break;
            case imc >= 18.5 && imc <= 24.9:
                setClassification("Peso normal");
            break;
            case imc >= 25 && imc <= 29.9:
                setClassification("Sobrepeso");
            break;
            case imc >=30 && imc <= 34.9:
                setClassification("Obesidade grau 1");
            break;
            case imc >=35 && imc <=39.9:
                setClassification("Obesidade grau 2") ;
            break;
            case imc >= 40:
                setClassification("Obesidade grau 3 (Obesidade mórbia)");
            break;
        }
    });
    return(
        <Text style={styles.Classification}>Seu IMC é classificado como: <Text style={{fontWeight:'bold'}}>{classification}</Text></Text>
    );
}

export const styles = StyleSheet.create({
    Classification:{
        marginTop: 10,
        fontSize: 17,
        textAlign: 'center',
        color: 'white'
    }
});

export default Classification;