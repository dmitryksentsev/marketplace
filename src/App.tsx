import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import Russian from './app/lang/ru_ru.json';
import { store } from './app/store';
import { theme } from './app/theme/theme';
import './App.css';
import Auth from './features/auth/Auth';

function App() {
  return (
    <Provider store={store}>
      <IntlProvider locale="ru" messages={Russian as Record<string, string>}>
        <StyledEngineProvider injectFirst={true}>
          <ThemeProvider theme={theme}>
            <Auth />
          </ThemeProvider>
        </StyledEngineProvider>
      </IntlProvider>
    </Provider>
  );
}

export default App;
