import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { styles } from "./Results";

const Classification = ({imc}) => {
    const [classification, setClassification] = useState();
    switch (imc){
        case imc < 18.5:
            setClassification("Abaixo do peso");
        break;
        case imc >= 18.5 && imc <= 24.9:
            setClassification("Sobrepeso");
        break;
        case imc >= 25 && imc <= 29.9:
            setClassification("Obesidade grau 1");
        break;
        case imc >=30 && imc <= 39.9:
            setClassification("Obesidade grau 2");
        break;
        case imc >= 40:
            setClassification("Obesidade grau 3 (Obesidade mórbia)");
        break;

        return(
            <Text styles={styles}>Seu IMC é classificado como: {classification}</Text>
        );
    }
}

export default Classification;