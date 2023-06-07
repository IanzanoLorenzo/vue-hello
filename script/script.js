"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            greetings: 'Ciao Mondo'
        }
    },
}).mount('#app')