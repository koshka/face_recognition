const { createContext } = require("react");

const RouteContext = createContext({
  route: "",
  onRouteChange: () => {},
});

export default RouteContext;
