import { View, TextInput, Button, StyleSheet } from "react-native";
import Result from "./Results";
import { useState } from "react";
import { styles } from "./Results";

const Classification = ({imc}) => {
    const [classification, setClassification] = useState();
    switch (imc){
        case imc < 18.5:
            classification = setClassification("Abaixo do peso");
        break;
        case imc >= 18.5 && imc <= 24.9:
            classification = setClassification("Sobrepeso");
        break;
        case imc >= 25 && imc <= 29.9:
            classification = setClassification("Obesidade grau 1");
        break;
        case imc >=30 && imc <= 39.9:
            classification = setClassification("Obesidade grau 2");
        break;
        case imc >= 40:
            classification = setClassification("Obesidade grau 3 (Obesidade mórbia)");
        break;

        return(
            <Text styles={styles}>Seu IMC é classificado como: {imc}</Text>
        );
    }
}