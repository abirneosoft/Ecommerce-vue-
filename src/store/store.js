import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        token:'',
        opt:'',
      inCart:JSON.parse(localStorage.getItem('myCart'))?JSON.parse(localStorage.getItem('myCart')):[],
                
    },
    getters:{
        inCart: state => state.inCart
     },
    mutations:{
       
        myopt(state,payload){
            return state.opt=payload.id
        },
        
        ADD_TO_CART(state,id){ state.inCart.push(id)}
        
    },
    actions:{
        
        opt(context,payload){
            context.commit('myopt',payload)
        },
        addToCart(context,id) { context.commit('ADD_TO_CART',id)}
    }

})