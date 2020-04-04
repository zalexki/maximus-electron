import _ from 'lodash';

export default {
  updateContainerList ({ commit, getters }, {containers}) {
    
    containers.forEach(dockerContainer => {
      let isIn = false;

      getters.containerList.forEach(storeContainerList => {
        if (storeContainerList.Id === dockerContainer.Id) {
          commit('UPDATE_CONTAINER', dockerContainer)

          isIn = true;
        }
      });

      if (!isIn) {
        commit('ADD_CONTAINER', dockerContainer)
      }
    });

    getters.containerList.forEach(storeContainerList => {
      // get state containers not present in dockerContainer
      let res = _.find(containers, { 'Id': storeContainerList.Id });
      if (res === undefined) {
        console.log('remove', dockerContainer)
        commit('REMOVE_CONTAINER', dockerContainer)
      }
    });

    // containers.containers.forEach(container => {
    //   commit('UPDATE_CONTAINER', container)
    // });

    // getters.containerList.forEach(stateContainer => {
    //   console.log(stateContainer);
    // });
     
    // id: container.Id,
    // name: container.Name,
    // running: container.State.Running,
    // image: container.Config.Image
    
  } 
} 
  
