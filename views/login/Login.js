import React, { useState } from "react"
import { View, Text, StyleSheet, Button } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
    useFonts,
    SourceSansPro_200ExtraLight,
    SourceSansPro_200ExtraLight_Italic,
    SourceSansPro_300Light,
    SourceSansPro_300Light_Italic,
    SourceSansPro_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_600SemiBold,
    SourceSansPro_600SemiBold_Italic,
    SourceSansPro_700Bold,
    SourceSansPro_700Bold_Italic,
    SourceSansPro_900Black,
    SourceSansPro_900Black_Italic
} from "@expo-google-fonts/dev";
import { TextInput } from "react-native-gesture-handler";
import { TextInputComponent } from '../../components/TextInputComponent';
import { ButtonComponent } from "../../components/ButtonComponent";
import { Link } from "react-router-native";

export const Login = (props) => {
    const [user, setUser] = useState({})
    const [link, setLink] = useState("")

    const setLogin = async (login) => {
        const usuario = user
        usuario.login = login
        await setUser(usuario)
        console.log(user)
        if (login[0] === 0 || login[0] === "0") {
            setLink("/home")
        } else {
            setLink("/homePaciente")
        }
    }

    const setSenha = async (senha) => {
        const usuario = user
        usuario.senha = senha
        await setUser(usuario)
        console.log(user)
    }

    const entrar = () => {
        props.entrar()
    }

    const cadastrar = () => {
        props.cadastrar()
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TextInputComponent childrenBefore={<Text style={styles.inputTitle}>CPF</Text>} inputStyle={styles.inputStyle} placeholder="CPF" keyboardType="numeric" onChangeText={setLogin} style={{ width: "80%" }} secureTextEntry={false} />
                <TextInputComponent childrenBefore={<Text style={styles.inputTitle}>Senha</Text>} childrenAfter={<Text style={styles.esqueciSenha}>Esqueci minha senha</Text>} inputStyle={styles.inputStyle} placeholder="Senha" keyboardType="numeric" onChangeText={setSenha} style={{ width: "80%" }} secureTextEntry={true} />
                <View style={{ width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}>
                    <Link to = {link}>
                        <ButtonComponent buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle} onPress={entrar} title="Entrar" />
                    </Link>
                    <Link to="/cadastro/1">
                        <ButtonComponent buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle} onPress={cadastrar} title="Cadastrar" />
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
    },
    container: {
        marginTop: 25,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    loginButton: {
        fontSize: RFValue(18),
        color: "black",
        fontWeight: "800",
        textTransform: "uppercase"
    },
    buttonStyle: {
        backgroundColor: "white",
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: RFValue(20)
    },
    buttonTextStyle: {
        fontSize: RFValue(18),
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    inputStyle: {
        backgroundColor: "#F8BC24"
    },
    inputTitle: {
        fontSize: RFValue(14),
        color: "white",
        textAlign: "left",
    },
    esqueciSenha: {
        fontSize: RFValue(10),
        color: "white",
        alignSelf: "flex-end"
    }

})