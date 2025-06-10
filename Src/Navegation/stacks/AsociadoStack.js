import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListarAsociado from "../../../Screen/Asociados/ListarAsociado";
import DetalleAsociado from "../../../Screen/Asociados/DetalleAsociado";
import EditarAsociado from "../../../Screen/Asociados/EditarAsociado";

const Stack = createStackNavigator();

export default function AsociadosStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarAsociados"
                component={ListarAsociado}
                options={{ title: "Asociados" }}
            />
             <Stack.Screen 
                name= "DetalleAsociados"
                component={DetalleAsociado}
                options={{ title: "Detalle Asociado" }}
            />
             <Stack.Screen 
                name= "EditarAsociados"
                component={EditarAsociado}
                options={{ title: "Nuevo/Editar Asociados" }}
            />
        </Stack.Navigator>
    );
}