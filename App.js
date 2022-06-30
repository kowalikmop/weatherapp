import AppProvider from "./components/AppState";
import Navigator from "./routes/Stack";


const App = () => {
  return (
    <AppProvider>
      <Navigator>

      </Navigator>
    </AppProvider>
  );
};

export default App;
