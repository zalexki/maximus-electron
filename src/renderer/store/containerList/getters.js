
export default {
    containerList: (state) => state.containerList,
    formattedList: (state) => {
        let list = [];
        state.containerList.forEach(container => {
            list.push({
                name: container.Names[0],
                running: container.State,
                image: container.Image
            })
        });
        return list;
    },
} 