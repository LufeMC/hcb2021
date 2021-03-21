import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Link } from 'react-router-native';

export const PacienteLista = () => {
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
                <View style={styles.content}>
                    <Link to="/pacientePerfil" style = {{width: "100%"}}>
                        <View style={styles.profile}>
                            <View style={styles.profilePhoto}>
                            </View>
                            <Text style={styles.profileTitle}>Dona Maria</Text>
                        </View>
                    </Link>
                    <View style={styles.profile}>
                        <View style={styles.profilePhoto}>
                        </View>
                        <Text style={styles.profileTitle}>João Pedro</Text>
                    </View>
                    <View style={styles.profile}>
                        <View style={styles.profilePhoto}>
                        </View>
                        <Text style={styles.profileTitle}>Ronaldo</Text>
                    </View>
                    <View style={styles.profile}>
                        <View style={styles.profilePhoto}>
                        </View>
                        <Text style={styles.profileTitle}>Seu Júlio</Text>
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