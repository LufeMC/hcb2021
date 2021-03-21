import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Link } from 'react-router-native';

export const MinhasConsultas = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Link to="/homePaciente">
                        <View style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "flex-start", flexDirection: "row" }}>
                            <SimpleLineIcons style={styles.headerText} name="arrow-left" />
                            <Text style={[styles.headerText, { marginLeft: RFValue(5) }]}>Voltar</Text>
                        </View>
                    </Link>
                </View>
                <View style={styles.content}>
                    <View style={styles.profile}>
                        <View style={styles.profilePhoto}>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", width: "80%", justifyContent: "space-around", alignContent: "flex-start", alignItems: "flex-start" }}>
                            <Text style={styles.profileTitle}>Dr. Ana Paula</Text>
                            <Text style={styles.profileTitle}>Ortopedista</Text>
                            <Text style={styles.profileTitle}>Marcado por Dr. Ana Paula para 21/03/2021 às 14:00</Text>
                        </View>
                    </View>
                    <View style={styles.profile}>
                        <View style={styles.profilePhoto}>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", width: "80%", justifyContent: "space-around", alignContent: "flex-start", alignItems: "flex-start" }}>
                            <Text style={styles.profileTitle}>Dr. Ricardo</Text>
                            <Text style={styles.profileTitle}>Cardiologista</Text>
                            <Text style={styles.profileTitle}>Marcado por Dona Maria para 25/03/2021 às 15:30</Text>
                        </View>
                    </View>
                    <View style={styles.profile}>
                        <View style={styles.profilePhoto}>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", width: "80%", justifyContent: "space-around", alignContent: "flex-start", alignItems: "flex-start" }}>
                            <Text style={styles.profileTitle}>Dr. Maria Júlia</Text>
                            <Text style={styles.profileTitle}>Neurologista</Text>
                            <Text style={styles.profileTitle}>Marcado por Dr. Maria Júlia para 30/03/2021 às 09:00</Text>
                        </View>
                    </View>
                    <View style={styles.profile}>
                        <View style={styles.profilePhoto}>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", width: "80%", justifyContent: "space-around", alignContent: "flex-start", alignItems: "flex-start" }}>
                            <Text style={styles.profileTitle}>Dr. Fabricio</Text>
                            <Text style={styles.profileTitle}>Nefrologista</Text>
                            <Text style={styles.profileTitle}>Marcado por Dr. Fabricio para 01/04/2021 às 16:00</Text>
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
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
        width: "80%",
        height: RFPercentage(100)
    },
    profile: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
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
})