import { Provider } from 'react-redux';
import './App.css';
import PageRouter from './Router';
import { CommonReducer } from './Reducer/CommonReducer'
import { createStore } from 'redux'

function App() {
  const store = createStore(CommonReducer)
  return (
    <div className="App">
      <Provider store={store}>
        <PageRouter></PageRouter>
      </Provider>
    </div>
  );
}

export default App;
