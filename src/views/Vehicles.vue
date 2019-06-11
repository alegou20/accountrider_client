<template>
    <v-container>
        <h1>Vehicles</h1>
        <div v-if="vehicles">
            <template v-for="(v, index) in vehicles" >
                <div :key="`vehicle${index}`">
                    <vehicle class="mb-2" :v="v" ></vehicle>
                </div>
            </template>
        </div>
        <p v-if="!vehicles">No vehicles found.</p>
    </v-container>
</template>

<script>
    import Vehicle from '@/components/Vehicle.vue'

    export default {
        name: "Vehicles",
        data () {
            return {
                vehicles: null
            }
        },
        components: {
            Vehicle
        },
        async mounted () {
            if (!localStorage.ownercredentials)
                return;

            try {
                let oc = JSON.parse(localStorage.ownercredentials);
                let res = await this.$store.dispatch('getVehiclesByOwnerCredentialsId', oc.id);
                this.vehicles = res.data;
            } catch (e) {
                console.log(e);
            }
        }
    }
</script>

<style scoped>

</style>
