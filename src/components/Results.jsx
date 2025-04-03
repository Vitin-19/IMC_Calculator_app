import React from "react";
import { Text,StyleSheet } from "react-native";

const Result = ({imc}) => {
    return(
        <Text style={styles.result}>Seu IMC é: <Text style={{fontWeight:'bold'}}>{imc}</Text></Text>
    );
};

export const styles = StyleSheet.create({
    result:{
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333'
    },
});

export default Result