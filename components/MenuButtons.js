import {View, Text, SafeAreaView, StyleSheet,
    TouchableOpacity} from 'react-native';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import UIData from "./UIData";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const MenuButton = ({name, title, backgroundColor}) => {
    backgroundColor = backgroundColor || UIData.defaultButtonBackground;

    return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    // style={{...styles.button, backgroundColor: backgroundColor}}
                    style={[styles.button, {backgroundColor: backgroundColor}]}
                >
                    <FontAwesome name={name} size={23} color={"#ededed"} />
                </TouchableOpacity>

                <Text style={styles.menuText}>{title}</Text>
            </View>
    )
}

export default MenuButton;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        flex: 1,
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    menuText: {
        color: "#868686",
        fontSize: 12,
        paddingTop: 10,
        fontWeight: "700"
    },
})