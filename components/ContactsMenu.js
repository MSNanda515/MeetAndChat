import {View, StyleSheet, Text} from 'react-native';
import ContactCard from "./ContactCard";

const ContactsMenu = () => {
    return (
        <View style={styles.container}>
            <ContactCard />
        </View>
    )
};

export default ContactsMenu;

const styles = StyleSheet.create({
    container: {

    },

});