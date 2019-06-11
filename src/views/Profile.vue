<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm6>
                <v-text-field
                        single-line
                        outline
                        v-model="user.username"
                        disabled
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        :label="$t('NEWpassword')"
                        v-model="password"
                        type="password"
                ></v-text-field>

                <v-btn block round color="primary" @click="updatePassword">{{$t('update')}}</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        data() {
            return {
                oldPassword: '',
                password: '',
            };
        },

        computed: {
            user () {
                return this.$store.getters.user
            }
        },
        methods: {
            updatePassword() {
                this.$store
                    .dispatch("updateProfile", {password: this.password})
                    .then(res => {
                        alert('CORRECT: password is changed')
                    }).catch(err => {
                    alert('Password has not been changed')
                });
            }
        },
    };
</script>

<style scoped>

</style>
