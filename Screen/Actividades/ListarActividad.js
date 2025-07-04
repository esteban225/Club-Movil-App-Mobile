import { useNavigation } from "@react-navigation/native";
import { act, use } from "react";
import { View, Text, Alert, FlatList } from "react-native"
import ActividadCard from "../../components/ActividadCard";

export default function ListarActividad() {

    const [actividades, setActividades] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const handleActividades = async () => {
        setLoading(true);

        try {
            const result = await ListarActividades();
            if (result.success) {
                setActividades(result.data);
            } else {
                Alert.alert("Error", result.message || "No se pudieron cargar las actividades.");
            }
        } catch (error) {
            Alert.alert("Error", "Ocurrió un error al cargar las actividades.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleActividades();
        });
        return unsubscribe;
    }, [navigation]);

    const handleEditar = (actividad) => {
        navigation.navigate("EditarActividad", { actividad });
    }

    const handleEliminar = (id) => {
        Alert.alert(
            "Confirmar Eliminación",
            "¿Estás seguro de que deseas eliminar esta actividad?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Eliminar",
                    onPress: async () => {
                        try {
                            const response = await EliminarActividad(id);
                            if (response.success) {
                                Alert.alert("Éxito", "Actividad eliminada correctamente.");
                                handleActividades();
                            } else {
                                Alert.alert("Error", response.message || "No se pudo eliminar la actividad.");
                            }
                        } catch (error) {
                            Alert.alert("Error", "Ocurrió un error al eliminar la actividad.");
                        }
                    }
                }
            ]
        );
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Cargando Actividades...</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <FlatList
                data={actividades}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ActividadCard
                        actividad={item}
                        onEdit={() => handleEditar(item)}
                        onDelete={() => handleEliminar(item.id)}
                    />
                )}
                ListEmptyComponent={<Text style={styles.empty}>No hay actividades disponibles.</Text>}
            />
        </View>
    );
}