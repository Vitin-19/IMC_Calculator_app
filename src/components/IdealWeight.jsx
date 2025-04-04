import { Text } from "react-native";
import { styles } from "./Classification"; // Reutilização da estilização do <Text> do Classification.jsx


/* 
    Função que retorna um texto junto com os pesos máximos e mínimos sendo que o 
    mínimo está na posição 0 do array e o máximo na 1
 */
const IdealWeight = ({pesos}) => {
    return(
        <Text style={styles.Classification}>Seu peso deve estar entre <Text style={{fontWeight:'bold'}}>{pesos[0]}kg e {pesos[1]}kg</Text></Text>
    )
}

export default IdealWeight;