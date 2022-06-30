import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Town from "./Town";

const Tab = createBottomTabNavigator();

const Tabs = () => {

    console.log('Tabs działa !!');
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Town" component={Town} />
    </Tab.Navigator>
  );
};

export default Tabs;
