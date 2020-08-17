
 import * as Flex from  "@twilio/flex-ui";

const thisFlexId = Math.random().toString(36).substring(7);
let notificationActive = false;
let amountOtherFlex = 0;

Flex.Notifications.addListener("notificationDismissed", () => {
  notificationActive = false;
});

const checkFlexTab = (flex, Component) => {

  const flexOpen = getFlexOpenList();

    if(flexOpen.length > 0) {

      flex.MainContainer.Content.replace(Component);
      localStorage.setItem('flexOpen', JSON.stringify([...flexOpen, thisFlexId]));

    } else {

      localStorage.setItem('flexOpen', JSON.stringify([ thisFlexId ]));

      window.addEventListener('storage', () => {

        const flexOpen = getFlexOpenList();

        amountOtherFlex = flexOpen.length - 1;

        if(flexOpen.filter(elem => elem !== thisFlexId).length > 0) { 
            
          if(!notificationActive) { 

            notificationActive = true; 
            flex.Notifications.showNotification("anotherFlexNotification", {
              amountOtherFlex
            });

          }

        } else {

          notificationActive = false;
          Flex.Notifications.dismissNotificationById("anotherFlexNotification");

        }

      });

    }

    window.onbeforeunload = () => {   
        onPageUnload();
    };
}

const onPageUnload = () => {

    const flexOpen = getFlexOpenList();
    const idx = flexOpen.findIndex(elem => elem === thisFlexId)

    if(idx == 1){ 
      localStorage.setItem('flexOpen', JSON.stringify([]));
    }

}

const getFlexOpenList = () => {
  const itemValue = localStorage.getItem('flexOpen');
  return (itemValue && JSON.parse(itemValue)) || [];
}

export {
    checkFlexTab
}