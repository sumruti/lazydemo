// import dependency to handle HTTP request to our back end

import Vuex from 'vuex'
import Vue from 'vue'
import {HTTP} from '../http-common'


//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
posts: []
}

//to handle state
const getters = {}

//to handle actions


const actions = {

   

    getCars({ commit , postData}) {
        console.log(postData)
     HTTP.post('api/v2/cars/browse',postData)
        .then(response => {
             console.log(response)
            commit('SET_CARS', response.data)
        })
    }
}

//to handle mutations
const mutations = {
    SET_CARS(state, cars) {
        state.cars = cars
    }
}

//export store module
export default new Vuex.Store({
state,
getters,
actions,
mutations
})