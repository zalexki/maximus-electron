<template>
  <div id="wrapper">
    <b-container>
      <b-table
        show-empty
        hover
        :items="toto"
        :fields="containerFields"
        @row-clicked="onRowClicked"
      >
      </b-table>
    </b-container>
  </div>
</template>

<script>
import SystemInformation from './LandingPage/SystemInformation'
import Docker from 'dockerode'

export default {
  name: 'landing-page',
  components: { SystemInformation },
  data () {
    return {
      toto: [],
      containerFields: [
        {key: 'name', label: 'Name', sortable: true},
        {key: 'running', label: 'Running', sortable: true},
        {key: 'image', label: 'Image', sortable: true},
      ],
      docker: new Docker({ socketPath: '/var/run/docker.sock' })
    }
  },
  computed: {
    test() {
      return this.$store.getters.containerList;
    },
  },
  watch: {
    test(value) {
      this.getContainerList(value);
    },
  },
  methods: {
    getContainerList(value) {
      let arr = [];
      value.forEach(container => {
        arr.push({
          name: container.Names[0],
          running: container.State,
          image: container.Image
        })
      });

      console.log(arr);

      this.toto = arr;
    },
    onRowClicked(item) {
      console.log(item)
    },
  }
}
</script> 

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 50%;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.title {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
}

.title.alt {
  font-size: 18px;
  margin-bottom: 10px;
}

.doc p {
  color: black;
  margin-bottom: 10px;
}

.doc button {
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.doc button.alt {
  color: #42b983;
  background-color: transparent;
}
</style>
