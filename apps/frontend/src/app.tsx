import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import { ThemeProvider } from 'styled-components';
import store from './store';
import { GlobalStyles, theme } from './styles';
import { AppRoutes } from './routes';
import { history } from './routes/history';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ReactNotification />
        <Router history={history}>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}
