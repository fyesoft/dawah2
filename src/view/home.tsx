import React from "react";
import { StyleSheet, View, Text } from "react-native";

export class HomeScreen extends React.Component {
    public constructor(props: {}) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <Text>Welcome to Dawah App</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});