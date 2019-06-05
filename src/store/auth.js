import jwt_decode from 'jwt-decode'
import axios from 'axios'

export default {
    state: {
        user: null,
        locale: 'nl',
        isAuthenticated: !!localStorage.token,
    },
    getters: {
        locale (state) {
            return state.locale;
        },

        user(state){
            return state.user
        },

        isAuthenticated(state) {
            return state.isAuthenticated;
        },
    },
    mutations: {
        setLocale(state, locale) {
            state.locale = locale;
        },

        SET_AUTH(state, user) {
            state.isAuthenticated = true;
            state.user = user;
            state.errors = {};
        },

        LOGOUT(state) {
            state.isAuthenticated = false;
            state.user = null;
            delete localStorage.token
        }
    },
    actions: {
        LOGIN(context, credentials) {
            return axios.post("http://i367868core.venus.fhict.nl/users/authenticate", {
                username: credentials.username,
                password: credentials.password
            })
                .catch((e) => {
                    console.error(e)
                })
        },

        Authorise(context, payload) {
            return axios.get('http://192.168.25.101:8080/BillAdministration/ownercredentials/' + payload.BSN +"/"+ payload.postalcode, {
                headers: {
                    'x-api': ''
                }
            })
        },

        SetUserOutOfToken(context, payload) {
            localStorage.token = payload.data.token
            const loggedUser = {
                bsn: payload.data.bsn,
                username: payload.data.username
            }
            console.log(loggedUser)
            context.commit("SET_AUTH", loggedUser);
        },

        REGISTER(context, credentials) {
            return axios.post("http://i367868core.venus.fhict.nl/users/register", {
                BSN: credentials.BSN,
                username: credentials.username,
                password: credentials.password
            })
                .catch((e) => {
                    console.error(e)
                })
        },

        CHECK_AUTH(context) {
            const tokenExp = jwt_decode(localStorage.token)

            if(tokenExp.exp < Date.now() / 1000){
                alert('token has expired')
                context.commit("LOGOUT", null);
                return false
            }

            const token = jwt_decode(localStorage.token)
            const loggedUser = {
                id: token.id,
                username: token.username
            }

            context.commit("SET_AUTH", loggedUser);
            return true
        },

        logout() {
            this.commit("LOGOUT", null)
            delete localStorage.token
        },
    },
}
