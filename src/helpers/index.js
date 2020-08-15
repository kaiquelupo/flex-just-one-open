
const thisFlexId = Math.random().toString(36).substring(7);

const checkFlexTab = (flex, Component) => {

    const itemValue = localStorage.getItem('flexOpen');
    const flexOpen = (itemValue && JSON.parse(itemValue)) || [];

    if(flexOpen.length > 0) {

      flex.MainContainer.Content.replace(Component);

    } else {

      localStorage.setItem('flexOpen', JSON.stringify([ thisFlexId ]));

    }

    window.onbeforeunload = () => {   
        onPageUnload();
    };
}

const onPageUnload = () => {

    const itemValue = localStorage.getItem('flexOpen');
    const flexOpen = itemValue && JSON.parse(itemValue) || [];
        
    const newArray = flexOpen.filter(elem => elem !== thisFlexId);

    localStorage.setItem('flexOpen', JSON.stringify(newArray));

}

export {
    checkFlexTab
}