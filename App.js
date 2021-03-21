import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import { ButtonComponent } from './components/ButtonComponent';
import { EscolhaPerfil } from './views/cadastro/EscolhaPerfil';
import { PreencherInfosPaciente } from './views/cadastro/PreencherInfosPaciente';
import { Home } from './views/home/Home';
import { HomePaciente } from './views/home/HomePaciente';
import { MeusMedicos } from './views/home/MeusMedicos';
import { MinhasConsultas } from './views/home/MinhasConsultas';
import { NovoPaciente } from './views/home/NovoPaciente';
import { PacientePerfil } from './views/home/PacientePerfil';
import { PacienteLista } from './views/home/PacientesLista';
import { MeuMedico } from './views/home/MeuMedico';
import { Login } from './views/login/Login';
import { PreencherInfosMedico } from './views/cadastro/PreencherInfosMedico';

export default function App(props) {
  const entrar = () => {
    console.log("Entrar")
  }

  const cadastrar = () => {
    console.log("oi")
  }

  return (
    <NativeRouter path="/">
      <View style={styles.main_container}>
        <Redirect from="/" to="/login" />
        <Route path="/login" component={() => <Login entrar={entrar} cadastrar={cadastrar} />} />
        <Route path="/cadastro/1" component={() => <EscolhaPerfil/>} />
        <Route path="/cadastro/2" component={() => <PreencherInfosPaciente/>} />
        <Route path="/cadastro/3" component={() => <PreencherInfosMedico/>} />
        <Route path="/home" component={() => <Home/>} />
        <Route path="/novoPaciente" component={() => <NovoPaciente/>} />
        <Route path="/pacienteLista" component={() => <PacienteLista/>} />
        <Route path="/pacientePerfil" component={() => <PacientePerfil/>} />
        <Route path="/homePaciente" component={() => <HomePaciente/>} />
        <Route path="/minhasConsultas" component={() => <MinhasConsultas/>} />
        <Route path="/meusMedicos" component={() => <MeusMedicos/>} />
        <Route path="/meuMedico" component={() => <MeuMedico/>} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  main_container: {
    // marginTop: 25
    height: "100%",
    width: "100%"
  },
  box: {
    width: "100%",
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: "blue",
  },
  boxText: {
    color: "white"
  },
  pressed: {
    backgroundColor: "blue",
  },
  notPressed: {
    backgroundColor: "green",
  }
});
