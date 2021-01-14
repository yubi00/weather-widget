import WeatherForm from "./components/WeatherForm";
import WeatherWidget from "./components/WeatherWidget";

const App = () => {
  return (
    <div className='app'>
      <div className='weather__widget'>
        <WeatherForm />
        <WeatherWidget />
      </div>
    </div>
  );
};

export default App;
