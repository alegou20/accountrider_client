import ApiService from "@/common/api.service";
import jwt_decode from 'jwt-decode'
import AxiosInstance from '@/router/axios-config'

export default {
    state: {
        user: {},
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
            state.user = {};
            state.errors = {};
            delete localStorage.token
        }
    },
    actions: {
        setAuthorisationHeader({ }, token) {
            if (token)
                AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
            else
                delete AxiosInstance.defaults.headers.common['Authorization']
        },

        LOGIN(context, credentials) {
            return ApiService.post("auth/login", {
                email: credentials.email,
                password: credentials.password
            })
                .catch((e) => {
                    console.error(e)
                })
        },

        Authorise(context, payload) {
            return ApiService.get('ownercredentials', payload);
        },

        SetUserOutOfToken(context, payload) {
            localStorage.token = payload.data

            const token = jwt_decode(payload.data)
            const loggedUser = {
                id: token.id,
                email: token.email
            }

            context.commit("SET_AUTH", loggedUser);
        },

        REGISTER(context, credentials) {
            return ApiService.post("auth/register", {
                email: credentials.email,
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
            ApiService.setHeader();
            const token = jwt_decode(localStorage.token)
            const loggedUser = {
                id: token.id,
                email: token.email
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
