import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuBar from "../components/MenuBar";
import ContactsMenu from "../components/ContactsMenu";

const Home = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{height: '100%'}}>
                <Header/>
                <SearchBar/>
                <MenuBar />
                <ContactsMenu />
            </SafeAreaView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 10,
        height: '100%'
    },
});