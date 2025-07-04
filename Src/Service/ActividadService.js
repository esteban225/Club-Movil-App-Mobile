import api from "./Conexion";

export const listarActividades = async () => {
    try {
        const response = await api.get("/listarActividades");
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error al listar actividades:", error);
        return { success: false, message: error.message || "Error al listar actividades" };
    }
}

export const crearActividad = async (actividad) => {
    try {
        const response = await api.post("/crearActividad", actividad);
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error al crear actividad:", error);
        return { success: false, message: error.message || "Error al crear actividad" };
    }
}

export const editarActividad = async (id, actividad) => {
    try {
        const response = await api.put(`/editarActividad/${id}`, actividad);
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error al editar actividad:", error);
        return { success: false, message: error.message || "Error al editar actividad" };
    }
}   

export const eliminarActividad = async (id) => {
    try {
        const response = await api.delete(`/eliminarActividad/${id}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error al eliminar actividad:", error);
        return { success: false, message: error.message || "Error al eliminar actividad" };
    }
}   