import {useState, useEffect} from "react";
import {StyleSheet, TextInput, View, Text} from "react-native";
import {TouchableOpacity} from "react-native-web";
import {io} from 'socket.io-client';

const InputField = ({fieldState, placeholder}) => {
    let [field, setField] = fieldState;



    return (
        <View style={styles.info}>
            <TextInput
                style={styles.textInput}
                value={field}
                placeholder={placeholder}
                placeholderTextColor={"#767476"}
                onChangeText={text => setField(text)}
            />
        </View>
    )
}

const StartMeeting = () => {

    useEffect(() => {

        const API_URL = 'http://localhost:3001';
        let socket = io(`${API_URL}`);
        console.log("Hellooo");

    }, []);

    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();

    return (
        <View style={styles.startMeetingContainer}>
            <InputField fieldState={[name, setName]} placeholder={"Enter Name"} />
            <InputField fieldState={[roomId, setRoomId]} placeholder={"Enter Room Id"} />

            <View style={styles.meetingButton}>
                <TouchableOpacity
                    style={styles.meetingButton}
                    onPress={() => {}}
                >
                    <Text style={styles.meetingButtonText}>Start Meeting</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
};

export default StartMeeting;

const styles = StyleSheet.create({
    startMeetingContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    info: {
        width: '100%',
        backgroundColor: "#373538",
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#484648",
        padding: 14,
    },
    textInput: {
        color: "white",
        fontSize: 19,
    },
    meetingButton: {
        width: 360,
        marginVertical: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0470DC",
        height: 50,
        borderRadius: 15,
    },
    meetingButtonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    }
})