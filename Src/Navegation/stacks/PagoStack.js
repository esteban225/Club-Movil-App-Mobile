import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListarPago from "../../../Screen/Pagos/ListarPago";
import DetallePago from "../../../Screen/Pagos/DetallePago";
import EditarPago from "../../../Screen/Pagos/EditarPago";

const Stack = createStackNavigator();

export default function PagosStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarPagos"
                component={ListarPago}
                options={{ title: "Pagos" }}
            />
             <Stack.Screen 
                name= "DetallePagos"
                component={DetallePago}
                options={{ title: "Detalle Pago" }}
            />
             <Stack.Screen 
                name= "EditarPagos"
                component={EditarPago}
                options={{ title: "Nuevo/Editar Pagos" }}
            />
        </Stack.Navigator>
    );
}