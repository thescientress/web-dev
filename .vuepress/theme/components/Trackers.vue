<template>
    <div v-if="optIn">
        <!-- Start of HubSpot Embed Code -->
        <script
            id="hs-script-loader"
            src="https://js.hs-scripts.com/7061179.js" async defer
            type="text/javascript"
        ></script>
        <!-- End of HubSpot Embed Code -->
    </div>
</template>
<script>
    export default {
        props: {
            'optIn': { type: Boolean, default: false },
        },
    };
</script>
