import { Text } from "react-native";
import { styles } from "./Classification";

const IdealWeight = ({pesos}) => {
    return(
        <Text style={styles.Classification}>Seu peso deve estar entre <Text style={{fontWeight:'bold'}}>{pesos[0]}kg e {pesos[1]}kg</Text></Text>
    )
}

export default IdealWeight;