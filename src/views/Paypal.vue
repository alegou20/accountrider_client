<template>
    <div id="paypal">
        <v-content>
            <v-container>
                <paypal-checkout
                        amount="300.00"
                        currency="USD"
                        env="sandbox"
                        :client="paypal">
                </paypal-checkout>
            </v-container>
        </v-content>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                paypal: {
                    sandbox: 'AZL__AdhzORKlm5xlESvVMLmFXaQTl-P9CUVJJ5cjVnAHzb_PcmyzwqaAGg7iUJvEMwSDNdegcdnxEUj'
                }
            };
        },
    };
</script>

<style scoped>

</style>
ult {
