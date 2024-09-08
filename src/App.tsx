import './App.css';
import ThemeCustomization from './theme';
import TabsComponent from './components/Tabs';
import { BodyOutlet } from './utils/styledComponents';

function App() {
  return (
    <ThemeCustomization>
      <BodyOutlet>
        <TabsComponent />
      </BodyOutlet>
    </ThemeCustomization>
  );
}

export default App;
