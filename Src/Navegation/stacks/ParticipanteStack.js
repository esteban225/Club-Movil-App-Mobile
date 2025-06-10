import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListarParticipante from "../../../Screen/Participantes/ListarParticipante";
import DetalleParticipante from "../../../Screen/Participantes/DetalleParticipante";
import EditarParticipante from "../../../Screen/Participantes/EditarParticipante";

const Stack = createStackNavigator();

export default function ParticipantesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarParticipantes"
                component={ListarParticipante}
                options={{ title: "Participantes" }}
            />
             <Stack.Screen 
                name= "DetalleParticipantes"
                component={DetalleParticipante}
                options={{ title: "Detalle Participante" }}
            />
             <Stack.Screen 
                name= "EditarParticipantes"
                component={EditarParticipante}
                options={{ title: "Nuevo/Editar Participantes" }}
            />
        </Stack.Navigator>
    );
}