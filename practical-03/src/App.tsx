import { Component } from 'react';
import Layout from './components/wrapper/Layout';
import TodoHome from './pages/TodoHome';

// Used class based component 
// Mentioned in the practical to use different types of component for practice
class App extends Component {
  render() {
    return (
      <Layout>
        <TodoHome />
      </Layout>
    );
  }
}

export default App;
