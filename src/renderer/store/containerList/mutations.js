export default {
  UPDATE_CONTAINER (state, container) {

    for (var i = 0; i < state.containerList.length; i++) { 
      if (state.containerList[i].Id === container.Id) {
        state.containerList[i] = {
          Id: container.Id,
          name: container.Names[0],
          running: container.State,
          image: container.Image
        };
        // console.log(state.containerList[i].Names);
        // console.log(state.containerList[i].State);
        // console.log(container.Names);
        // console.log(container.State);
      }
    }

    // state.containerList.forEach(containerState => {
      
    //   if (containerState.Id === container.Id) {
    //     console.log(containerState.Id === container.Id);
    //     container = containerState;
    //   }
    // });
  },
  ADD_CONTAINER (state, container) {
    state.containerList.push({
      Id: container.Id,
      name: container.Names[0],
      running: container.State,
      image: container.Image
    })
  },
  REMOVE_CONTAINER (state, container) {
    for (var i = 0; i < state.containerList.length; i++) { 
      if (state.containerList[i].Id === container.id) { 
        state.containerList.splice(i, 1)
      }
    }
  }
}