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
        getVehicle(context, payload) {
            return axios.get('http://192.168.25.101:8080/BillAdministration/vehicle/' + payload)}
    }
}
