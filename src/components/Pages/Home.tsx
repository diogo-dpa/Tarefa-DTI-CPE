import React, { ReactElement, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Input from '../Atoms/Input';

export default function Home(): ReactElement{

    const [date, setDate] = useState("");
    const [dateError, setDateError] = useState("");
    const [result, setResult] = useState("");

    const validateDate = ():void => {
        if(isNaN(Date.parse(date)) || date.length !== 16 ){
            setDateError("Digite uma data válida.")
        }else{
            setDateError("")
        }
    }

    const formatDateToBR = (dateToFormat: Date) => {
        const day  = dateToFormat.getDate().toString().padStart(2, '0')
        const month  = (dateToFormat.getMonth()+1).toString().padStart(2, '0') //+1 pois no getMonth Janeiro começa com zero.
        const year  = dateToFormat.getFullYear();
        const hour  = dateToFormat.getHours().toString().padStart(2, '0');
        const min  = dateToFormat.getMinutes().toString().padStart(2, '0');
        const result = ` ${hour}:${min} ${day}-${month}-${year}`;
        return result;
    }

    const doSum = (value: number):void => {

        if(value){
            const formattedDate = new Date(date)
            let  CalculatedHour = new Date(date);
            CalculatedHour.setHours(formattedDate.getHours() + value)
            setResult(formatDateToBR(CalculatedHour));
        }
        else{
            setResult('');
        }
    }


    useEffect(() => {
        validateDate();
    }, [date])

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Capacitação DTI</Text>
                <Text style={styles.subtitle}>Tarefa 01</Text>
                <Text style={styles.studant}>Aluno: Diogo de Paula Almazan</Text>
            </View>
            <View style={styles.inputArea}>
                <Input value={date} onChangeText={setDate} error={date? dateError: ''}/>
                <TextInput
                    placeholder={"Digite o número de horas"}
                    onChangeText={(value: string) => doSum(Number(value))}
                    style={styles.input}
                />
            </View>
            <View>
                <Text>Resultado</Text>
                <Text>{result}</Text>
            </View>
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
    titleArea: {
        width:'auto',
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    studant: {
        fontSize: 20,
    },
    inputArea: {
        width:'auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 30,
    },
    subtitle:{
        fontSize: 25,
        fontWeight: "600",
    },
    input:{
        borderWidth: 1,
        borderRadius: 12,
        padding: 6,
        marginTop: 10,
    }
});