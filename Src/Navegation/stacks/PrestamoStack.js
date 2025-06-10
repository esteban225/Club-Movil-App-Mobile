import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListarPrestamo from "../../../Screen/Prestamos/ListarPrestamo";
import DetallePrestamo from "../../../Screen/Prestamos/DetallePrestamo";
import EditarPrestamo from "../../../Screen/Prestamos/EditarPrestamo";

const Stack = createStackNavigator();

export default function PrestamosStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarPrestamos"
                component={ListarPrestamo}
                options={{ title: "Prestamos" }}
            />
             <Stack.Screen 
                name= "DetallePrestamo"
                component={DetallePrestamo}
                options={{ title: "Detalle Prestamo" }}
            />
             <Stack.Screen 
                name= "EditarPrestamos"
                component={EditarPrestamo}
                options={{ title: "Nuevo/Editar Prestamos" }}
            />
        </Stack.Navigator>
    );
}