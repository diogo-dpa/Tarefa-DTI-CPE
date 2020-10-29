import React, { ReactElement, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Input from '../Atoms/Input';

export default function Home(): ReactElement{

    const [date, setDate] = useState("");
    const [dateError, setDateError] = useState("");

    const validateDate = ():void => {
        if(isNaN(Date.parse(date)) || date.length !== 16 ){
            setDateError("Digite uma data válida.")
        }else{
            setDateError("")
        }
    }

    useEffect(() => {
        validateDate();
    }, [date])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Capacitação DTI</Text>
            <Text style={styles.subtitle}>Tarefa 01</Text>
            <Input value={date} onChangeText={setDate} error={''}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    title:{
        fontSize: 30,
    },
    subtitle:{
        fontSize: 25,
        fontWeight: "600",
    }
});