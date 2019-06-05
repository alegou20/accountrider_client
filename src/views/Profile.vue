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
                        :label="$t('OLDpassword')"
                        v-model="oldPassword"
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        :label="$t('NEWpassword')"
                        v-model="password"

                ></v-text-field>

                <v-btn block round color="primary"  @click="update">{{$t('update')}}</v-btn>
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
            update() {
                alert('update')
            }
        },
    };
</script>

<style scoped>

</style>
