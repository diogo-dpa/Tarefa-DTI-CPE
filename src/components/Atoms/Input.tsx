import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

// import { Container } from './styles';

type InputProps = {
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
}

const Input = ({
    value,
    onChangeText,
    error=''
}: InputProps) => {

    console.log(value)
    return (
        <View>
            <TextInput
                onChangeText={(value) => onChangeText(value)}
                placeholder={'yyyy-mm-dd hh:mm'}
                style={styles.input}
            />
            <Text style={styles.errorMessage}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 12,
        padding: 6,
    },
    errorMessage:{
        color: 'red',
    }
});

export default Input;