import axios from 'axios'

export default {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        UpdateUser(context, payload) {
            return axios.put('http://192.168.25.101:8080/BillAdministration/OwnerCredentials/' + payload)

        }
    }
}
