const { createAppContainer } = require("react-navigation");
const { createStackNavigator } = require("react-navigation-stack");
const { default: SearchScreen } = require("./src/screens/SearchScreen");

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
