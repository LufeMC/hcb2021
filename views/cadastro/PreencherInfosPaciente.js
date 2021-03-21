import React from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Link } from "react-router-native";
import { ButtonComponent } from "../../components/ButtonComponent";
import { TextInputComponent } from "../../components/TextInputComponent";

export const PreencherInfosPaciente = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={{ flex: 1, display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "column", width: "100%" }}>
                    <Text style={styles.title}>Agora preciso de algumas informações, ok?</Text>
                </View>
                <View style={{ flex: 4, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", flexDirection: "column" }}>
                    <TextInputComponent childrenBefore={<Text style={styles.inputTitle}>Nome</Text>} inputStyle={styles.inputStyle} placeholder="Nome" keyboardType="default" style={{ width: "80%" }} secureTextEntry={false} />
                    <TextInputComponent childrenBefore={<Text style={styles.inputTitle}>CPF</Text>} inputStyle={styles.inputStyle} placeholder="CPF" keyboardType="numeric" style={{ width: "80%" }} secureTextEntry={false} />
                    <TextInputComponent childrenBefore={<Text style={styles.inputTitle}>Senha</Text>} inputStyle={styles.inputStyle} placeholder="Senha" keyboardType="numeric" style={{ width: "80%" }} secureTextEntry={true} />
                    <Link to="/homePaciente" style={{width: "80%"}}>
                        <ButtonComponent buttonStyle={styles.buttonStyleConfirmar} title="Avançar" buttonTextStyle={styles.buttonTextStyle} />
                    </Link>
                </View>
                <View style={{ flex: 1, marginBottom: 0, paddingBottom: 0, width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center", alignContent: "center", flexDirection: "column" }}>
                    <Link to="/cadastro/1">
                        <ButtonComponent buttonStyle={styles.buttonStyle} title="Voltar" buttonTextStyle={styles.buttonTextStyle} />
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
    title: {
        color: "white",
        fontSize: RFValue(25),
        fontWeight: "bold",
        textAlign: "center" 
    },
    profile: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        marginVertical: 15
    },
    profilePhoto: {
        borderRadius: RFPercentage(100),
        height: 100,
        width: 100,
        backgroundColor: "white"
    },
    profileTitle: {
        fontWeight: "bold",
        fontSize: RFValue(20),
        color: "white",
        marginLeft: RFValue(10)
    },
    buttonStyle: {
        width: RFPercentage(100),
        backgroundColor: "#f58800",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: RFPercentage(10),
        paddingBottom: RFPercentage(2)
    },
    buttonStyleConfirmar: {
        width: "100%",
        backgroundColor: "#266867",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: RFPercentage(8),
        borderRadius: RFValue(8),
        marginTop: RFValue(10)
    },
    inputStyle: {
        backgroundColor: "#F8BC24"
    },
    inputTitle: {
        fontSize: RFValue(14),
        color: "white",
        textAlign: "left",
    },
    buttonTextStyle: {
        fontSize: RFValue(18),
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})