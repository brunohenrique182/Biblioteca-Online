import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Busca from "./pages/Busca";
import CadastroLivro from "./pages/Cadastro-Livro";
import Cadastro from "./pages/Cadastro";
import Estante from "./pages/Estante";
import Livro from "./pages/Livro";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";

const Tab = createBottomTabNavigator();

export enum ScreenNames {
  Busca = "Busca",
  CadastroLivro = "Cadastro-Livro",
  Cadastro = "Cadastro",
  Estante = "Estante",
  Livro = "Livro",
  Login = "Login",
  Perfil = "Perfil",
  Home = "Home",
}

ScreenNames.Login;

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={ScreenNames.Home} component={Perfil} />
        <Tab.Screen name={ScreenNames.Estante} component={Estante} />
        <Tab.Screen name={ScreenNames.Perfil} component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
