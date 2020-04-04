export default {
  UPDATE_CONTAINER (state, container) {

    for (var i = 0; i < state.containerList.length; i++) { 
      if (state.containerList[i].Id === container.Id) { 
        state.containerList[i] = container;
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
    state.containerList.push(container)
  },
  REMOVE_CONTAINER (state, container) {
    for (var i = 0; i < state.containerList.length; i++) { 
      if (state.containerList[i].Id === container.id) { 
        state.containerList.splice(i, 1)
      }
    }
  }
}