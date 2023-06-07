"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            greetings: 'Ciao Mondo',
            image: 'https://picsum.photos/400'
        }
    },
}).mount('#app')