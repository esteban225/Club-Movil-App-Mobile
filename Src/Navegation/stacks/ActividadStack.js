import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListarActividad from "../../../Screen/Actividades/ListarActividad";
import DetalleActividad from "../../../Screen/Actividades/DetalleActividad";
import EditarActividad from "../../../Screen/Actividades/EditarActividad";

const Stack = createStackNavigator();

export default function ActividadesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarActividades"
                component={ListarActividad}
                options={{ title: "Actividades" }}
            />
             <Stack.Screen 
                name= "DetalleActividades"
                component={DetalleActividad}
                options={{ title: "Detalle Actividad" }}
            />
             <Stack.Screen 
                name= "EditarActividades"
                component={EditarActividad}
                options={{ title: "Nuevo/Editar Actividades" }}
            />
        </Stack.Navigator>
    );
}