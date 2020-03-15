<template>
  <div>
    <b-container>
      <b-table
        show-empty
        hover
        :items="containerList"
        :fields="containerFields"
        @row-clicked="onRowClicked"
      >
      </b-table>

    </b-container>
  </div>
</template>

<script>
  import { isArray } from 'util';
  // import mydockerjs from 'mydockerjs';
  const child_process = require('child_process'); 
  const cmd = require('node-cmd');
  // const mydockerjs = require('mydockerjs');
  const Docker = require('dockerode');

  export default {
    name: 'Home',
    data() {
      return {
        containerList: [],
        containersIDs: [],
        containerFields: [
          {key: 'name', label: 'Name', sortable: true},
          {key: 'running', label: 'Running', sortable: true},
          {key: 'image', label: 'Image', sortable: true},
        ],
      };
    },
    methods: {
      onRowClicked(item) {
        console.log(item);
      },
      getContainersIDs() {
        // setInterval(() => {
        //   cmd.get('docker ps -aq', (err, stdout, stderr) => { 
        //     this.containersIDs = stdout.split("\n");
        //     this.containerList = [];
        //     this.containersIDs.forEach(containerID => {
        //       this.getContainerInspectByID(containerID);
        //     });
        //   });
        // }, 1000);
      },
      getContainerInspectByID(containerID) {
        cmd.get('docker inspect ' + containerID, (err, stdout, stderr) => { 
          let response = JSON.parse(stdout);
          if (isArray(response)) {
            this.containerList.push({ 
              id: containerID, 
              name: response[0].Name,
              running: response[0].State.Running,
              image: response[0].Config.Image,
              env: response[0].Config.Env,
              mounts: response[0].Mounts,
              state: response[0].State,
              portBindings: response[0].HostConfig.portBindings,
            });
          }
        });
      }
    },
    mounted() {
      // this.getContainersIDs();
      // cmd.get('docker ps -aq', (err, stdout, stderr) => { 
      //   this.containersIDs = stdout.split("\n");
      //   this.containerList = [];
      //   this.containersIDs.forEach(containerID => {
      //     this.getContainerInspectByID(containerID);
      //   });
      // });
      let list = Docker.listContainers();
      console.log(mydockerjs);
    }
  };
</script>

<style scoped>
  .card-text.header {
    text-align: center;
  }
  .card-text .title {
    font-size: 32px;
  }
  .card-text .text {
    font-size: 16px;
  }
  .card-text .step {
    font-size: 16px;
    font-weight: 600;
  }
  .d-flex {
    align-items: flex-start;
  }
  .max-size {
    max-width: 480px !important;
  }
  #privacy {
    font-size: 12px;
    text-align: justify;
  }
</style>
