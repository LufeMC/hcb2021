import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Link } from 'react-router-native';
import { ButtonComponent } from '../../components/ButtonComponent';

export const MeuMedico = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={{ width: "100%", marginTop: 25, backgroundColor: "#1A4645", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start" }}>
                    <View style={styles.header}>
                        <Link to="/meusMedicos">
                            <View style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "flex-start", flexDirection: "row" }}>
                                <SimpleLineIcons style={styles.headerText} name="arrow-left" />
                                <Text style={[styles.headerText, { marginLeft: RFValue(5) }]}>Voltar</Text>
                            </View>
                        </Link>
                        {/* <Link to="/login">
                            <View style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "flex-start", flexDirection: "row" }}>
                                <AntDesign style={styles.headerText} name="logout" />
                                <Text style={[styles.headerText, { marginLeft: RFValue(5) }]}>Sair</Text>
                            </View>
                        </Link> */}
                    </View>
                    <View style={{ paddingBottom: RFValue(10), width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                        <View style={{ alignSelf: "center", display: "flex", alignItems: "center", alignContent: "center", justifyContent: "flex-start", flexDirection: "column" }}>
                            <View style={{ height: RFValue(100), width: RFValue(100), borderRadius: RFPercentage(100), backgroundColor: "white" }}>
                            </View>
                            <Text style={{ color: "white", fontSize: RFValue(15), fontWeight: "bold" }}>
                                Dona Maria
                        </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style = {{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", width: "100%"}}>
                        <Text style = {{textAlign: "center", color: "red", fontWeight: "bold", fontSize: RFValue(20)}}>
                            Você tem uma consulta marcada para hoje às 14:00
                        </Text>
                    </View>
                    {/* <ButtonComponent buttonStyle={styles.contentButton} buttonTextStyle={styles.contentTextButton} title="Pedir Retorno" />
                    <ButtonComponent buttonStyle={styles.contentButton} buttonTextStyle={styles.contentTextButton} title="Recomendar Exercício" />
                    <ButtonComponent buttonStyle={styles.contentButton} buttonTextStyle={styles.contentTextButton} title="Receitar Remédio" />
                    <ButtonComponent buttonStyle={styles.contentButton} buttonTextStyle={styles.contentTextButton} title="Notificação Personalizada" /> */}
                    <View style = {{ borderRadius: 8, padding: RFValue(10), height: RFPercentage(55), backgroundColor: "white", marginTop: RFValue(20), width: "90%", alignSelf: "center", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", alignContent: "center"}}>
                        <View style={{borderWidth: 1, borderColor: "black", borderRadius: 8, padding: 7, alignSelf: "flex-end", marginVertical: 3, maxWidth: "80%"}}>
                            <Text>Doutora</Text>
                        </View>
                        <View style={{borderWidth: 1, borderColor: "black", borderRadius: 8, padding: 7, alignSelf: "flex-start", marginVertical: 3, maxWidth: "80%"}}>
                            <Text>Oi, Dona Maria! Como posso te ajudar?</Text>
                        </View>
                        <View style={{borderWidth: 1, borderColor: "black", borderRadius: 8, padding: 7, alignSelf: "flex-end", marginVertical: 3, maxWidth: "80%"}}>
                            <Text>Tô com uma dor nas costas</Text>
                        </View>
                        <View style={{borderWidth: 1, borderColor: "black", borderRadius: 8, padding: 7, alignSelf: "flex-end", marginVertical: 3, maxWidth: "80%"}}>
                            <Text>Parare um espinho bem no meio delas</Text>
                        </View>
                        <View style={{borderWidth: 1, borderColor: "black", borderRadius: 8, padding: 7, alignSelf: "flex-start", marginVertical: 3, maxWidth: "80%"}}>
                            <Text>Hum... Entendi. Vou pedir um retorno para vermos essa dor.</Text>
                        </View>
                    </View>
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
        justifyContent: "flex-start",
        alignContent: "center",
        paddingVertical: RFValue(20),
        flexDirection: "column",
        height: RFPercentage(100)
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
        paddingVertical: RFValue(10),
        marginTop: RFValue(8)
    },
    contentTextButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: RFValue(20)
    }
})