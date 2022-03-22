import {View, StyleSheet, TextInput} from 'react-native';
import StartMeeting from "../components/StartMeeting";

const MeetingRoom = () => {
    return (
       <View style={styles.container}>
           <StartMeeting />
       </View>
    )
};

export default MeetingRoom;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        flex: 1,
    },
})