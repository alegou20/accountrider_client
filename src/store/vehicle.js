import axios from 'axios'

export default {
    state: {
        vehicles: null
    },
    getters: {
        vehicles(state) {
            return state.vehicles
        }
    },
    mutations: {
        setVehicle(state){
            state.vehicles = state;
        }
    },
    actions: {
        getVehiclesByOwnerCredentialsId(context, ownerCredentialsId) {
            return axios.get('http://192.168.25.101:8080/BillAdministration/vehicle/ownercredentials/' + ownerCredentialsId, {
                headers: {
                    'x-api': 1
                }
            })
        }
    }
}
