import React from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Link } from "react-router-native";
import { ButtonComponent } from "../../components/ButtonComponent";

export const EscolhaPerfil = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={{ flex: 1, display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "column", width: "100%" }}>
                    <Text style={styles.title}>Primeira vez usando o App?</Text>
                    <Text style={styles.subTitle}>Como podemos ajudar?</Text>
                </View>
                <View style={{ flex: 4, width: "80%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", flexDirection: "column" }}>
                    <Link to="/cadastro/3" style = {{width: "80%"}}>
                        <View style={styles.profile}>
                            <View style={styles.profilePhoto}>
                            </View>
                            <Text style={styles.profileTitle}>Sou Médico</Text>
                        </View>
                    </Link>
                    <Link to="/cadastro/2" style = {{width: "80%"}}>
                        <View style={styles.profile}>
                            <View style={styles.profilePhoto}>
                            </View>
                            <Text style={styles.profileTitle}>Sou Paciente</Text>
                        </View>
                    </Link>
                </View>
                <View style={{ flex: 1, marginBottom: 0, paddingBottom: 0, width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center", alignContent: "center", flexDirection: "column" }}>
                    <Link to="/login">
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
        fontWeight: "bold"
    },
    subTitle: {
        color: "white",
        fontSize: RFValue(20),
        marginTop: RFValue(10)
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
    buttonTextStyle: {
        fontSize: RFValue(18),
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})