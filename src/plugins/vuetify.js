import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/es5/locale/es';


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#024d98',
                secondary: '#565656',
                accent: '#8e44ad',
                error: '#e74c3c',
                info: '#3498db',
                success: '#2ecc71',
                warning: '#f1c40f'
            },
        },
    },
    lang: {
        locales: { es },
        current: 'es',
    },
});
