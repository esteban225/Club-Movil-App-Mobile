import { View, Text, TextInput, StyleSheet } from "react-native"
import BottonComponent from "../../components/BottonComponent"
import react, { useState } from "react";

export default function RegistroScreen({navigation}){
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState(""); 
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre Completo"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                value={telefono}
                onChangeText={setTelefono}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmar Contraseña"
                secureTextEntry
                value={confirmarPassword}
                onChangeText={setConfirmarPassword}
            />
            <BottonComponent
                title="Registrarse"
                onPress={() => console.log("Registro")}
            />
            <BottonComponent
                title="Iniciar Sesión"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
        textAlign: "center",
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
});