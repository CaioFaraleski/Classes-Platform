import './styles/global.css'
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Router } from './Router';

function App() {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Router />
      </HashRouter>
    </ApolloProvider>
  );
}

export default App
