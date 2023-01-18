// Router
import { BrowserRouter as Router } from 'react-router-dom';

// ANT
import { Layout } from 'antd';

// Routes
import Routes from 'routes';

const {
  Content
} = Layout;

const App = () => {
  return <Router>
    <Content>
      <Routes />
    </Content>
  </Router>
}

export default App;
