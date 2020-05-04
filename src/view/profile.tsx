import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    NativeSyntheticEvent,
    TextInputEndEditingEventData 
} from "react-native";

interface UserProfile {
    name: string;
    email: string;
    cellPhone: string;
    city: string;
    emailColor: string;
    phoneColor: string;
}

export class ProfileScreen extends React.Component {
    readonly emailValidationRegex = /^\S+@\S+\.\S+$/;
    readonly phoneValidationRegex = /^\+?[\d-() ]+$/;
    public state: UserProfile = {
        name: "",
        email: "",
        cellPhone: "",
        city: "",
        emailColor: "black",
        phoneColor: "black"
    };
    public constructor(props: UserProfile) {
        super(props, props);
        this.state = {...props};
    }

    public render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Profile</Text>
                <Text style={styles.text}>Full Name</Text>
                <TextInput style={styles.input} placeholder='John Doe'></TextInput>
                <Text style={styles.text}>Email</Text>
                <TextInput 
                    style={[styles.input, { color: this.state.emailColor}]} 
                    placeholder='john@example.com' 
                    value={this.state.email} 
                    onEndEditing={this.onEmailEndEditing}
                    keyboardType="email-address"
                ></TextInput>
                <Text style={ 
                        this.state.emailColor === "red" 
                        ? styles.warningText 
                        : styles.hidden
                    } >Enter a valid email address.
                </Text>
                <Text style={styles.text}>Cell Phone</Text>
                <TextInput 
                    style={[styles.input, {color: this.state.phoneColor}]}
                    placeholder='+1-123-456-7890'
                    value={this.state.cellPhone}
                    onEndEditing={this.onPhoneEndEditing}
                    keyboardType="phone-pad"
                >
                </TextInput>
                <Text style={ 
                        this.state.phoneColor === "red" 
                        ? styles.warningText 
                        : styles.hidden
                    } >Enter a valid phone number.
                </Text>
                <Text style={styles.text}>City</Text>
                <TextInput
                    style={styles.input}
                    placeholder='New York'
                    value={this.state.city}>
                </TextInput>
            </View>
        )
    }

    private onEmailEndEditing = (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        if (this.emailValidationRegex.exec(e.nativeEvent.text) != null) {
            this.setState({ emailColor: "black" })
            console.log(`onEmailEndEditing: ${e.nativeEvent.text}`);
        } else {
            console.log("Email failed to validate");
            this.setState({ emailColor: "red" });
        }
    }

    private onPhoneEndEditing = (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        if (this.phoneValidationRegex.exec(e.nativeEvent.text) != null) {
            this.setState({phoneColor: "black"});
        } else {
            this.setState({phoneColor: "red"});
        }
    }
}

// Profile
// Dawah Tables
// 
// Signout
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "stretch",
        justifyContent: "flex-start",
        marginTop: 35,
        padding: 10,
    },
    text: {
        padding: 5,
        marginTop: 10,
        color: '#111',
    },
    input: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "stretch",
        padding: 5,
        marginTop: 10

    },
    warningText: {
        padding: 5,
        marginTop: 10,
        color: 'red',
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        color: "purple",
    },
    hidden: {
        height: 0,
        width: 0,
    }
});


