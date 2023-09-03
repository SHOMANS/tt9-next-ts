'use client';

import { ThemeProvider as ContextThemeProvider } from '@/contexts/themeContext';
import { ThemeProvider } from 'styled-components';
import { Inter } from 'next/font/google';
import { darkTheme, theme } from '@/styles/theme';
import GlobalStyle from '@/styles/global';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  // const { theme } = useThemeContext(); // won't work
  // const myCB = (myTheme) => (
  //   <ThemeProvider theme={myTheme === 'light' ? theme : darkTheme}>
  //     <h1>hello from root</h1>
  //     <div style={{ margin: '0 auto', width: '90%', padding: 20 }}>
  //       {children}
  //     </div>
  //   </ThemeProvider>
  // ); // same as children

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider store={store}>
          <ContextThemeProvider
          // myCB={myCB}
          // children={(myTheme) => (
          //   <ThemeProvider theme={myTheme === 'light' ? theme : darkTheme}>
          //     <h1>hello from root</h1>
          //     <div style={{ margin: '0 auto', width: '90%', padding: 20 }}>
          //       {children}
          //     </div>
          //   </ThemeProvider>
          // )}
          >
            {(myTheme) => (
              <ThemeProvider theme={myTheme === 'light' ? theme : darkTheme}>
                <GlobalStyle />
                <h1>hello from root</h1>
                <div style={{ margin: '0 auto', width: '90%', padding: 20 }}>
                  {children}
                </div>
              </ThemeProvider>
            )}
          </ContextThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
