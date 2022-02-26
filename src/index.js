import { render, StrictMode, ThemeProvider, theme } from 'common';
import { App } from 'App';
import { Provider } from 'react-redux';
import { store } from 'App/store';
import './index.css';

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter basename="/goit-react-hw-06-phonebook/"> */}
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
    {/* </BrowserRouter> */}
  </StrictMode>,
  document.getElementById('root')
);

// import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
