<template>
  <v-app>
  <v-content>
   <div id="app">
    <router-view></router-view>
   </div>
  </v-content>
 </v-app>
</template>

<script>
import Docker from 'dockerode'
import _ from 'lodash';

export default {
  name: 'maximus-electron',
  data () {
    return {
      docker: new Docker({ socketPath: '/var/run/docker.sock' }),
    }
  },
  created (){
    this.watchContainerList();
  },
  methods: {
    watchContainerList() {
      setInterval(() => {
        this.docker
          .listContainers({all:true})
          .then(this.updateContainers)
          .catch(this.updateErrored)
      }, 2000)
    },
    updateContainers(containers) {
      
      this.$store.dispatch('updateContainerList', {
        containers: containers,
      })
      // verify if containers are in
      

      // function test (par, param) {
      //   console.log(par);
      //   console.log(param);
      // }

      // containers.forEach(container => {
      //   let res = differenceBy(this.$store.getters.containerList, container, 'id');
      //   console.log(res);
      // });

      // var delete_id = _.result(_.find(savedViews, function(obj) {
      //   return obj.id === view;
      // }), 'id');
      // console.log(delete_id);
        
    },
    updateErrored(container) {
      console.error(container);
    }
  }
}
</script>

<style>
/* CSS */
</style>
