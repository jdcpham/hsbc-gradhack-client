import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* React Imports */
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, Image } from 'react-native';

/* React Paper Imports */
import { Provider as PaperProvider, Button } from 'react-native-paper';

/* Theming */
import Theme from '../../../../styles/theme.style';
import ButtonStyle from '../../../../styles/button.style';
import { ContainedButtonPaperTheme } from '../../../../styles/paper.style';


export function Activities(props: any) {

    // Get Naviation Object.
    const navigation = props.navigation;

    return (
        <PaperProvider>
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.innerContainer}
                    behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <View style={styles.btnContainer}>
                        <Button icon="creation"
                            style={[ButtonStyle.btn,
                            {
                                justifyContent: 'center',
                                marginLeft: 5,
                                flex: 1
                            }]}
                            theme={ContainedButtonPaperTheme}
                            labelStyle={{
                                color: Theme.primary,
                                fontWeight: '700',
                                fontSize: 14,
                                letterSpacing: 2
                            }}
                            mode="contained"
                            onPress={() => navigation.navigate('ShowActivityCategories')}>
                            See All Activities
                        </Button>
                        <Button icon="creation"
                            style={[ButtonStyle.btn,
                            {
                                justifyContent: 'center',
                                marginLeft: 5,
                                flex: 1
                            }]}
                            theme={ContainedButtonPaperTheme}
                            labelStyle={{
                                color: Theme.primary,
                                fontWeight: '700',
                                fontSize: 14,
                                letterSpacing: 2
                            }}
                            mode="contained"
                            onPress={() => navigation.navigate('ActivitySetupFormView')}>
                                Setup An Activity
                        </Button>
                        <Button icon="creation"
                            style={[ButtonStyle.btn,
                            {
                                justifyContent: 'center',
                                marginLeft: 5,
                                flex: 1
                            }]}
                            theme={ContainedButtonPaperTheme}
                            labelStyle={{
                                color: Theme.primary,
                                fontWeight: '700',
                                fontSize: 14,
                                letterSpacing: 2
                            }}
                            mode="contained"
                            onPress={() => navigation.navigate('ShowActivityInfo')}>
                                Test One Activity Info
                        </Button>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </PaperProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        width: '80%',
        paddingTop: 20,
        paddingBottom: 20
    }
});


export default Activities;
