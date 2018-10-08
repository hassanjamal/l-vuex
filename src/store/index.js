import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({

    state: { // like vue data property
        products: []
    },
    getters: { // like cue computed property
        availableProducts(state, getters) {
            return state.products.filter(product => product.inventory > 0);
        }
    },
    actions: { // like vue methods
        fetchProducts() {

        }
    },
    mutations: { // are used to update state
        setProducts(state, payload) {
            state.products = payload
        }
    }
})