import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* React Imports */
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, Image } from 'react-native';

/* React Paper Imports */
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper';

/* Theming */
import Theme from '../../../../styles/theme.style';
import InputStyle from '../../../../styles/input.style';
import SpacingStyle from '../../../../styles/spacing.style';
import ButtonStyle from '../../../../styles/button.style';
import { InputPaperTheme } from '../../../../styles/paper.style';
import { ContainedButtonPaperTheme } from '../../../../styles/paper.style';
import { OutlinedButtonPaperTheme } from '../../../../styles/paper.style';


function Register(props: any) {

    // Get Naviation Object.
    const navigation = props.navigation;

    // Hooks.
    // const [isLoggingIn, setLoggingIn] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <PaperProvider>
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.innerContainer} behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <Image source={require('../../../assets/animations/community.gif')} style={{ width: 160, height: 160 }} />
                    <Text style={{ marginTop: -5, fontSize: 50, letterSpacing: 5, fontWeight: 'bold' }}>MAJYK</Text>
                    <Text style={{ marginTop: 5, marginBottom: 30, fontSize: 14, letterSpacing: 0.5, fontWeight: 'bold' }}>SOCIAL INVESTMENTS</Text>
                    <View style={styles.inputContainer}>
                        <TextInput label="💌 EMAIL" style={[InputStyle.input]} mode="outlined" theme={InputPaperTheme} keyboardType="email-address" onChangeText={text => setEmail(text)} />
                        <TextInput label="🔑 PASSWORD" style={[InputStyle.input, SpacingStyle.mt1]} secureTextEntry={true} mode="outlined" theme={InputPaperTheme} onChangeText={text => setPassword(text)} />
                    </View>
                    <View style={styles.btnContainer}>
                        <Button icon="creation" style={[ButtonStyle.btn, { justifyContent: 'center', flex: 1 }]} theme={ContainedButtonPaperTheme} labelStyle={{ color: Theme.primary, fontWeight: '700', fontSize: 14, letterSpacing: 2 }}  mode="contained" onPress={() => props.setModalVisible(false)}>Sign up</Button>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </PaperProvider>
    );

    // function onLoginPress() {

    //     setLoggingIn(true);

    //     fetch('https://z3kx6gvst6.execute-api.us-east-2.amazonaws.com/dev/login', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             email: email,
    //             password: password
    //         })
    //     }).then(response => response.json()).then(res => {
    //         if (res.loggedIn) {

    //             // Set Local Storage and then navigate to main page.
    //             AsyncStorage.setItem('email', email).then(() => {
    //                 setLoggingIn(false);
    //                 navigation.navigate("Main");
    //             })

    //         } else {
    //             setLoggingIn(false);
    //             alert("Invalid email or password.")
    //         }
    //     }).catch(error => {

    //         setLoggingIn(false);
    //         alert("An error occurred.")

    //     })

    // }

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    btnContainer: {
        flexDirection: 'row',
        width: '80%',
        paddingTop: 20,
        paddingBottom: 20
    },
    forgotPassword: {
        width: '100%',
        paddingBottom: 30,
        fontSize: 50,
        backgroundColor: Theme.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default Register;
