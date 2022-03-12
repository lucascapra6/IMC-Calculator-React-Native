import React from "react";
import {View, Text, Share, TouchableOpacity} from "react-native"
import styles from "./style";

export default function ResultIMC(props) {
    const onShare = async () => {
        const result = await Share.share({
            message: `Meu IMC atual é ${props.resultImc}`
        })
    }
    return (
        <View style={styles.resultImcBox}>
            <Text style={styles.informationText}>{props.messageResultImc}</Text>
            <Text style={styles.resultImcText}>{props.resultImc}</Text>
            <View style={styles.charButtonBox}>
                <TouchableOpacity
                    style={styles.shareButton}
                    onPress={onShare}
                >
                    <Text style={styles.shareText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}