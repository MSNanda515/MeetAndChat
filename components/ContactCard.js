import {View, StyleSheet, Text} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

const ContactCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.thumbnail}>
                <AntDesign name={"star"} size={30} color={"#efefef"} />
            </View>
            <Text style={styles.title}>
                Starred
            </Text>
        </View>
    )
};

export default ContactCard;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    thumbnail: {
        backgroundColor: "#333333",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    title: {
        color: "white",
        paddingLeft: 20,
        fontSize: 18,

    }
});