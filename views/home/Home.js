import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Link } from 'react-router-native';
import { ButtonComponent } from '../../components/ButtonComponent';

export const Home = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={{ width: "100%", marginTop: 25, backgroundColor: "#1A4645", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start" }}>
                    <View style={styles.header}>
                        <Link to="/home">
                            <View style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "flex-start", flexDirection: "row" }}>
                                <Octicons style={styles.headerText} name="home" />
                                <Text style={[styles.headerText, { marginLeft: RFValue(5) }]}>Início</Text>
                            </View>
                        </Link>
                        <Link to="/login">
                            <View style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "flex-start", flexDirection: "row" }}>
                                <AntDesign style={styles.headerText} name="logout" />
                                <Text style={[styles.headerText, { marginLeft: RFValue(5) }]}>Sair</Text>
                            </View>
                        </Link>
                    </View>
                    <View style={{ paddingBottom: RFValue(10), width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                        <View style={{ alignSelf: "center", display: "flex", alignItems: "center", alignContent: "center", justifyContent: "flex-start", flexDirection: "column" }}>
                            <View style={{ height: RFValue(100), width: RFValue(100), borderRadius: RFPercentage(100), backgroundColor: "white" }}>
                            </View>
                            <Text style={{ color: "white", fontSize: RFValue(15), fontWeight: "bold" }}>
                                Dr. Ana Paula
                        </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <Link to="/pacienteLista">
                        <ButtonComponent buttonStyle={styles.contentButton} buttonTextStyle={styles.contentTextButton} title="Meus Pacientes" />
                    </Link>
                    <Link to="/novoPaciente">
                        <ButtonComponent buttonStyle={styles.contentButton} buttonTextStyle={styles.contentTextButton} title="Adicionar Paciente" />
                    </Link>
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
        alignContent: "flex-start",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        marginTop: 25,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignContent: "flex-start",
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
        paddingBottom: 0,
        width: "100%",
    },
    headerText: {
        fontSize: RFValue(16),
        color: "white"
    },
    content: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
        paddingVertical: RFValue(20),
        flexDirection: "column",
        height: RFPercentage(30)
    },
    contentButton: {
        backgroundColor: "#266867",
        width: "95%",
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "row",
        borderRadius: RFValue(15),
        paddingVertical: RFValue(20)
    },
    contentTextButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: RFValue(20)
    }
})