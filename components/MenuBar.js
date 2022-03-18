import {View, StyleSheet} from 'react-native';
import MenuButton from "./MenuButtons";
import UIData from "./UIData";


const MenuBar = ({navigation}) => {
    const buttonItems = UIData.menuButtons;

    return (
        <View style={styles.container}>
            {/*Display the buttons*/}
            {buttonItems.map((item) => (
                <MenuButton key={item.id} name={item.name} color={""} title={item.title}
                            backgroundColor={item.backgroundColor} navigation={navigation}/>
            ))}
        </View>
    );
};

export default MenuBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 27,
        paddingBottom: 10,
        borderBottomColor: "#1d1d1d",
        borderBottomWidth: 1,
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
});