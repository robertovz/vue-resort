import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let compareItems = window.localStorage.getItem('compareItems');
let lastItem = window.localStorage.getItem('lastItem');

export default new Vuex.Store({
    state: {
        compareItems: compareItems ? JSON.parse(compareItems) : [],
        lastItem: lastItem ? JSON.parse(lastItem) : [],
        search: '',
        storeItems: [
            {
                id: 1,
                name: "Double Deluxe",
                price: "275",
                category: "double",
                description: "example",
                img: require("./assets/img/products/product-01.jpg"),
                capacity: 2,
                size: "550",
                disabledDates: ['2019-11-11', '2019-11-12', '2019-11-13', '2019-11-14', '2019-11-15', '2019-11-16', '2019-11-17', '2019-11-18'],
                review: [
                    {
                        id: 1,
                        user_name: "User 1",
                        rating: 5,
                        description: "The best",
                        datePublished: "xxx-xx-xx"
                    }
                ]
            },
            {
                id: 2,
                name: "Single Economy",
                price: "145",
                category: "single",
                description: "example",
                img: require("./assets/img/products/product-02.jpg"),
                capacity: 1,
                size: "450",
                review: [
                    {
                        id: 1,
                        user_name: "User 1",
                        rating: 5,
                        description: "The best",
                        datePublished: "xxx-xx-xx"
                    }
                ]
            },
            {
                id: 3,
                name: "Double Economy",
                price: "240",
                category: "double",
                description: "example",
                img: require("./assets/img/products/product-03.jpg"),
                capacity: 2,
                size: "250",
                review: [
                    {
                        id: 1,
                        user_name: "User 1",
                        rating: 5,
                        description: "The best",
                        datePublished: "xxx-xx-xx"
                    }
                ]
            },
            {
                id: 4,
                name: "Single Deluxe",
                price: "275",
                category: "single",
                description: "example",
                img: require("./assets/img/products/product-04.jpg"),
                capacity: 1,
                size: "550",
                review: [
                    {
                        id: 1,
                        user_name: "User 1",
                        rating: 4.5,
                        description: "Good Adventure!",
                        datePublished: "xxx-xx-xx"
                    }
                ]
            },
            {
                id: 5,
                name: "Double Standard",
                price: "145",
                category: "double",
                description: "example",
                img: require("./assets/img/products/product-05.jpg"),
                capacity: 2,
                size: "250",
                review: [
                    {
                        id: 1,
                        user_name: "User 1",
                        rating: 5,
                        description: "Wonderful place!",
                        datePublished: "xxx-xx-xx"
                    }
                ]
            },
            {
                id: 6,
                name: "Single Economy",
                price: "420",
                category: "single",
                description: "example",
                img: require("./assets/img/products/product-06.jpg"),
                capacity: 1,
                size: "250",
                review: [
                    {
                        id: 1,
                        user_name: "User 1",
                        rating: 5,
                        description: "Wonderful place!",
                        datePublished: "xxx-xx-xx"
                    }
                ]
            },
            {
                id: 7,
                name: "Triple Deluxe",
                price: "910",
                category: "triple",
                description: "example",
                img: require("./assets/img/products/product-07.jpg"),
                capacity: 3,
                size: "750",
                review: [
                    {
                        id: 1,
                        user_name: "User 1",
                        rating: 5,
                        description: "Wonderful place!",
                        datePublished: "xxx-xx-xx"
                    }
                ]
            },
            {
                id: 8,
                name: "Triple Economy",
                price: "370",
                category: "triple",
                description: "example",
                img: require("./assets/img/products/product-08.jpg"),
                capacity: 3,
                size: "750",
                review: [
                    {
                        id: 1,
                        user_name: "User 1",
                        rating: 5,
                        description: "Wonderful place!",
                        datePublished: "xxx-xx-xx"
                    }
                ]
            },
            {
                id: 9,
                name: "Double Basic",
                price: "250",
                category: "double",
                description: "example",
                img: require("./assets/img/products/product-09.jpg"),
                capacity: 2,
                size: "750"
            },
            {
                id: 10,
                name: "Triple Deluxe",
                price: "950",
                category: "triple",
                description: "example",
                img: require("./assets/img/products/product-10.jpg"),
                capacity: 3,
                size: "750",
                review: [
                    {
                        id: 1,
                        user_name: "User 1",
                        rating: 4.5,
                        description: "Good Adventure!",
                        datePublished: "xxx-xx-xx"
                    }
                ]
            },
        ]
    },

    mutations: {

        addLastItem(state, item) {
            state.lastItem = item;
            this.commit('storeItem');
        },

        storeItem(state) {
            window.localStorage.setItem('lastItem', JSON.stringify(state.lastItem));
        },

        searchit(state, item) {
            state.search = item;
            Fire.$emit('searching');
        },

        addToCompareItems(state, item) {
            console.log(item);
            let found = state.compareItems.find(product => product.id == item.id);

            if (!found) {
                state.compareItems.push(item);
            }

            this.commit('storeCompareItems');
        },

        storeCompareItems(state) {
            window.localStorage.setItem('compareItems', JSON.stringify(state.compareItems));
        },

        removeFromCompareItems(state, item) {
            let index = state.compareItems.indexOf(item);

            state.compareItems.splice(index, 1);

            this.commit('storeCompareItems');
        }

    },


})
