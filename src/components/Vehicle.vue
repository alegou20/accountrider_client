<template>
    <div>
        <v-card v-if="vehicle" dark flat color="primary" class="mx-auto">
            <v-card-title>
                <v-icon large left>fas fa-car</v-icon>
                <span class="title font-weight-light">Vehicle #{{vehicle.id}}</span>
            </v-card-title>

            <v-card-text class>
                <v-timeline v-if="ownershipHistory">
                    <v-btn color="accent" @click="ownershipHistory = null">close</v-btn>
                    <v-timeline-item
                            v-for="owner in ownershipHistory"
                            :key="owner.id"
                            color="red lighten-2"
                            large
                    >
                        <template v-slot:opposite>
              <span>
                {{owner.beginFormatted}}
                <template v-if="owner.end">until {{owner.endFormatted}}</template>
              </span>
                        </template>
                        <owner-credential :oc="owner.ownerCredentials"></owner-credential>
                    </v-timeline-item>
                </v-timeline>
                <v-layout row wrap v-if="!ownershipHistory">
                    <v-flex xs6>Licence plate</v-flex>
                    <v-flex xs6>{{vehicle.licencePlate}}</v-flex>
                    <v-flex xs6>Emission type</v-flex>
                    <v-flex xs6>{{vehicle.vehicleType}}</v-flex>

                    <v-flex xs12 md6>
                        <owner-credential class="mt-2 ml-4" :oc="vehicle.ownerCredentials"></owner-credential>
                    </v-flex>
                    <v-flex xs12>
                        <bills v-if="bills" :bs="bills" class="mt-2"></bills>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import Bills from "@/views/Bills";

    export default {
        props: ["v"],
        components: { Bills },
        data() {
            return {
                activeOwnerCredential: null,
                activeCarTracker: null,
                ownerCredentials: null,
                carTrackers: null,
                bills: null,
                ownershipHistory: null
            };
        },
        methods: {
            getBillsByVehicleId() {
                this.$store
                    .dispatch("getBillsByVehicleId", this.vehicle.id)
                    .then(bills => {
                        if (bills) this.bills = bills;
                    })
                    .catch(err => {
                        this.$store.dispatch("errorMessage", "Error getting vehicle bills");
                    });
            },
        },
        computed: {
            vehicle() {
                console.log(this.v)
                return this.v;
            }
        }
    };
</script>

<style>
</style>
