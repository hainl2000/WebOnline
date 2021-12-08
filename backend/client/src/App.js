import { Provider } from 'react-redux';
import './App.css';
import PageRouter from './Router';
import { CommonReducer } from './Reducer/CommonReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

function App() {
  const store = createStore(CommonReducer, applyMiddleware(thunk))

  return (
    <div className="App">
      <Provider store={store}>
        <PageRouter></PageRouter>
      </Provider>
    </div>
  );
}

export default App;
