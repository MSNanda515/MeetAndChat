import {View, StyleSheet, Text} from 'react-native';
import ContactCard from "./ContactCard";
import UIData from "./UIData";

const ContactsMenu = () => {
    return (
        <View style={styles.container}>
            {UIData.contactsMenuCards.map((item, key) => (
                <ContactCard key={key} type={item.type} name={item.name} thumbnail={item.thumbnail}/>
            ))}
        </View>
    )
};

export default ContactsMenu;

const styles = StyleSheet.create({
    container: {

    },

});