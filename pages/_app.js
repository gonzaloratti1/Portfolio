import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';


function App({ Component, pageProps }) {
  
  return (
    <ThemeProvider enableSystem={true} attribute="class">  
      <Component {...pageProps}  />
    </ThemeProvider>
  );
}

export default App;
