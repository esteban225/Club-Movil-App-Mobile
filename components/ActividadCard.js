import { TouchableOpacity, View } from "react-native";

export default function ActividadCard({ actividad, onEdit, onDelete }) {
    return (
        <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.title}>{actividad.nombre}</Text>
                <Text style={styles.detalle}>Fecha: {actividad.fecha_evento}</Text>
                <Text style={styles.detalle}>Municipio: {actividad.municipio}</Text>
                <Text style={styles.detalle}>Total recaudo: {actividad.total_recaudo}</Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity onPress={onEdit} style={styles.iconBtn}>
                    <Iconicons name="edit" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete} style={styles.iconBtn}>
                    <Iconicons name="trash" size={24} color="#000" />
                </TouchableOpacity>

            </View>
        </View>

    );
}