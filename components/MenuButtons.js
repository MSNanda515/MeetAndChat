import {View, Text, SafeAreaView} from 'react-native';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const MenuButton = () => {
    return (
        <View>
            <SafeAreaView>
                <Text>Home</Text>
                <Header/>
                <SearchBar/>
            </SafeAreaView>
        </View>
    )
}

export default MenuButton;