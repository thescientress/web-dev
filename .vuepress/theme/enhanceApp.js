import VueGtag from 'vue-gtag';
import Cookies from 'js-cookie';
import 'cross-fetch/polyfill';

export default ({
                    Vue, // the version of Vue being used in the VuePress app
                    options, // the options for the root Vue instance
                    router, // the router instance for the app
                    siteData, // site metadata
                    isServer // is this enhancement applied in server-rendering or client
                }) => {
    Vue.use(VueGtag, {
        config: {id: siteData.themeConfig['GA_ID']},
        enabled: Cookies.get('opt_in') === '1'
    }, router);
}
