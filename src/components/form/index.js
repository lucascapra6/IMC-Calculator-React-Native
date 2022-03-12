import React, {useState} from "react";
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard, FlatList
} from "react-native"
import ResultIMC from "./Result IMC";
import ImcCalculator from "../../business/ImcCalculator";
import DateServices from "../../services/date";
import styles from "./style";
import {getCurrentTimestamp} from "react-native/Libraries/Utilities/createPerformanceLogger";

const calculator = new ImcCalculator()
const dateServices = new DateServices()
export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
    const [imc, setImc] = useState(null)
    const [currentDate, setCurrentDate] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function verifyImc() {
        if (imc === null) {
            Vibration.vibrate()
            setErrorMessage('Campo obrigatório *')
        }
    }

    function imcCalculator() {
        const imcResult = calculator.getImc(weight, height)
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: imcResult, currentDate: currentDate}])
        setImc(imcResult)
    }

    function validateImc() {
        if (weight != null && height != null) {
            imcCalculator()
            getCurrentDate()
            setHeight(null)
            setWeight(null)
            setMessageImc(`Seu IMC é:`)
            setTextButton('Calcular novamente')
            setErrorMessage(null)
            return
        }
        verifyImc()
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Preencha o peso e altura')
    }
    function getCurrentDate() {
        setCurrentDate(dateServices.formatedCurrentDate())
    }

    return (
        <View onPress={Keyboard.dismiss} style={styles.boxForm}>
            {imc === null ?
                <Pressable style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMesage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric">
                    </TextInput>
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMesage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex. 70"
                        keyboardType="numeric">
                    </TextInput>
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => validateImc()}
                        title={textButton}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.resultForm}>
                    <ResultIMC
                        messageResultImc={messageImc}
                        resultImc={imc}>
                    </ResultIMC>
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => validateImc()}
                        title={textButton}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({item}) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.currentDate}>{currentDate}: </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}