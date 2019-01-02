import Vue from 'vue'
import Vuex from 'vuex'
import { fields } from '../data/data'
import { ajaxAddAllShops, ajaxFindSelectedShops } from '../services/ajax'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    allShops: [],
    selectedShops: [],
    items:[],
    fields: [],
    stocksSelected: []
  },
  getters: {
    getAllShops(state) {
      return state.allShops
    },
    getItems(state) {
      return state.items
    },
    getStock(state) {
      return state.fields
    },
    getStocksSelected(state) {
      return state.stocksSelected
    }
  },
  mutations: {
    ADD_ALL_SHOPS(state, payload) {
      state.allShops = payload
    },
    FIND_SELECTED_SHOPS(state, shopsInRadius) {
      state.allShops = shopsInRadius
    },
    GET_STOCK(state, columns) {
      state.fields = columns.otherColumns.concat(columns.stocksSelected)
      state.stocksSelected = columns.stocksSelected
    }
  },
  actions: {
    addAllShops(context) {
      ajaxAddAllShops(context)
    },
    findSelectedShops(context, homeData) {
      ajaxFindSelectedShops(context, homeData)
    },
    getStock(context, stocksSelected) {
      const columns = { stocksSelected, otherColumns: ['shopName', 'address', 'google','jakd', 'gmaps'] }
      context.commit('GET_STOCK', columns)
    }
  }
})