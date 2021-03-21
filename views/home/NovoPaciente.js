import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Link } from 'react-router-native';

export const NovoPaciente = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Link to="/home">
                        <View style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "flex-start", flexDirection: "row" }}>
                            <SimpleLineIcons style={styles.headerText} name="arrow-left" />
                            <Text style={[styles.headerText, { marginLeft: RFValue(5) }]}>Voltar</Text>
                        </View>
                    </Link>
                </View>
                <View style = {styles.content}>
                    <Text style = {{color: "white", textAlign: "center", fontSize: RFValue(20), marginBottom: RFValue(50)}}>
                        Cadastre o novo paciente com o código QR abaixo
                    </Text>
                    <Image style = {{height: RFValue(300), width: RFValue(300)}} source = {require("../../assets/img/qrcode.png")} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "#051821",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        marginTop: 25,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "flex-start",
        height: "100%",
        width: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "flex-start",
        alignItems: "flex-start",
        padding: RFValue(28),
        width: "100%",
        marginTop: 25,
        backgroundColor: "#1A4645"
    },
    headerText: {
        fontSize: RFValue(16),
        color: "white"
    },
    content: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "80%",
        height: RFPercentage(100)
    }
})