export default {
  UPDATE_CONTAINER (state, container) {
    // console.log('update');
  },
  ADD_CONTAINER (state, container) {
    // console.log('add');
    state.containerList.push(container)
    // if (!state.containerList.includes(id.id)) {
    // }
  },
  REMOVE_CONTAINER (state, container) {
    for (var i = 0; i < state.containerList.length; i++) { 
      if (state.containerList[i].Id === container.id) { 
        state.containerList.splice(i, 1)
      }
    }
  }
}