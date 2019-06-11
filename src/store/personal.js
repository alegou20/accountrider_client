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
            return axios.put('http://192.168.25.101:8080/BillAdministration/ownercredentials/', payload,{
                headers: {
                    'x-api': ''
                }
            })
        },
        updateProfile(context, payload){
            let user = context.getters.user
            return axios.put('http://i367868core.venus.fhict.nl/users/'+ user.id,{
                BSN: user.bsn,
                username: user.username,
                password: payload.password
            }, {headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                }}
             )
        }
    }
}
