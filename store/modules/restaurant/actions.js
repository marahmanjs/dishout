import Api from '@/plugins/Api'

export default {
    getAllRest: ({commit} , data) => {
      Api().get('/restaurant').then((res)=> {
         commit('update_rest_list' , res.data)
      }).catch((err) => {
         console.log('err is ' ,err)
      })
    },
    getSpecificRest: ({commit} , data) => {
       let that = data.that
        Api().get(`/restaurant/${data.id}`).then((res)=>{
         commit('set_rest' , res.data)
        }).catch((err) => 
        console.log('err is ' ,err))
        that.$Spin.hide();
     },
     clearSpecificRest: ({commit}) => {
      commit('clear_rest')
   },
   deleteRest: ({commit} , data) => {
      let that = data.that
       Api().delete(`/restaurant/${data.id}`).then((res)=>
       console.log(res)
       ).catch((err) => 
       console.log('err is ' ,err))
       that.$Spin.hide();
    },
    clearSpecificRest: ({commit}) => {
     commit('clear_rest')
  },
   addNewRestaurant: ({commit} , data ) => {
      let  headers = {
         'Authorization': 'Token 5822cd005a14cf7212bffb51c2bab69d87460dae',
         'Content-Type': 'application/json'
         }
      let that = data.that 
      delete data.that
      console.log(data)
      Api().post('/restaurant' , JSON.stringify(data)  , {headers: headers}).then((res)=>
      console.log(res)
      ).catch((err) => 
      console.log('err is ' ,{err}))
      that.$Spin.hide();
   },
   getSpecificItem: ({commit} , data) => {
      let that = data.that
      that.$Spin.show()
      Api().get(`/menu_item/${data.id}`).then((res) =>
      commit('set_item' ,res.data),
      that.$Spin.hide()
      ).catch((err) => 
      console.log('err is ' ,err),
      that.$Spin.hide()
      )
      },
   clearItem: ({commit} ) => {
    commit('clear_item')
   },
   addNewMenu: ({commit} , data) => {
      let  headers = {
      'Authorization': 'Token 5822cd005a14cf7212bffb51c2bab69d87460dae',
      'Content-Type': 'application/json'
      }
      Api().post('/menu' , data , {headers: headers}).then((res) => {
         console.log(res)
      }).catch((err) => {
         console.log(err)
      })
   }
}