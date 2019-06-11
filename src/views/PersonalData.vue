<template>
    <v-container v-if="ownercredentials" fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm6>

                <v-text-field
                        single-line
                        outline
                        v-model="ownercredentials.bsn"
                        :label="$t('BSN')"
                        disabled
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        v-model="ownercredentials.name"
                        :label="$t('Name')"
                        disabled
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        v-model="ownercredentials.city"
                        :label="$t('City')"
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        v-model="ownercredentials.postalCode"
                        :label="$t('Postalcode')"
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        v-model="ownercredentials.streetName"
                        :label="$t('Streetname')"
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        v-model="ownercredentials.houseNumber"
                        :label="$t('Housenumber')"
                ></v-text-field>
                <v-btn block round color="primary" @click="update">{{$t('update')}}</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {

            };
        },

        computed: {
            user () {
                return this.$store.getters.user
            },
            ownercredentials(){
                if (localStorage.ownercredentials) {

                    return JSON.parse(localStorage.ownercredentials)
                }

                return null;
            }
        },
        methods: {
            update() {
                this.$store
                    .dispatch("UpdateUser", this.ownercredentials)
                    .then(res => {
                        alert('CORRECT: personal info is updated')
                    }).catch(err => {
                    alert('FALSE: personal info has not been updated')
                });
            },
        },
    };
</script>

<style scoped>

</style>
