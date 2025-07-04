import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native"

export default function EditarActividad() {

    const navigation = useNavigation();
    const route = useRoute();

    const actividad = route.params?.actividad;

    const [nombre, setNombre] = useState(actividad?.nombre || "");
    const [fecha_evento, setFechaEvento] = useState(actividad?.fecha_evento || "");
    const [municipio, setMunicipio] = useState(actividad?.municipio || "");
    const [total_recaudado, setTotalRecaudado] = useState(actividad?.total_recaudado || "");
    const [loading, setLoading] = useState(false);

    const esEdicion = !!actividad;

    const handleGuardar = async () => {
        if (!nombre || !fecha_evento || !municipio || !total_recaudado) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        setLoading(true);

        try {
            let result;
            if (esEdicion) {
                // Lógica para actualizar la actividad existente
                result = await EditarActividad(actividad.id, {
                    nombre,
                    fecha_evento,
                    municipio,
                    total_recaudado: parseFloat(total_recaudado),
                });
            } else {
                // Lógica para crear una nueva actividad
                result = await crearActividad({
                    nombre,
                    fecha_evento,
                    municipio,
                    total_recaudado: parseFloat(total_recaudado),
                });
            }
            if (result.success) {
                Alert.alert("Éxito", esEdicion ? "Actividad actualizada con éxito." : "Actividad creada con éxito.");
                navigation.goBack();
            } else {
                Alert.alert("Error", result.message || "Ocurrió un error al guardar la actividad.");
            }
        } catch (error) {
            Alert.alert("Error", "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{esEdicion ? "Editar Actividad" : "Nueva Actividad"}</Text>

            <Text style={styles.label}>Nombre</Text>
            <TextInput
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
                placeholder="Nombre de la actividad"
            />

            <Text style={styles.label}>Fecha del Evento</Text>
            <TextInput
                style={styles.input}
                value={fecha_evento}
                onChangeText={setFechaEvento}
                placeholder="YYYY-MM-DD"
            />

            <Text style={styles.label}>Municipio</Text>
            <TextInput
                style={styles.input}
                value={municipio}
                onChangeText={setMunicipio}
                placeholder="Municipio"
            />

            <Text style={styles.label}>Total Recaudado</Text>
            <TextInput
                style={styles.input}
                value={total_recaudado}
                onChangeText={setTotalRecaudado}
                placeholder="Total recaudado"
                keyboardType="numeric"
            />

            <TouchableOpacity>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <Text style={styles.button}>
                        {esEdicion ? "Actualizar Actividad" : "Crear Actividad"}
                    </Text>
                )}
            </TouchableOpacity>
        </View>
    );
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
        width: "60%",
    },

    text: {
        fontSize: 16,
        color: "#333",
        marginBottom: 8,
        textAlign: "center",
        paddingBottom: 10,
        fontWeight: "bold",
        marginTop: 20,
    },
});