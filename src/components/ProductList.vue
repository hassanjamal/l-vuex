<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products">{{ product.title}}</li>
        </ul>

        <h1>Product Available </h1>
        <ul>
            <li v-for="product in availableProducts">{{ product.title}}</li>
        </ul>
    </div>
</template>

<script>
    import shop from "@/api/shop";
    import store from "@/store/index";

    export default {
        computed: {
            products() {
                return store.state.products;
            },
            availableProducts() {
                return store.getters.availableProducts;
            }

        },

        created() {
            shop.getProducts(products => {
                store.commit('setProducts', products)
            });
        }
    };
</script>

