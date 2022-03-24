// eslint-disable-next-line import/order
import { hot } from "react-hot-loader/root";
// eslint-disable-next-line import/order
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { NotFoundPage } from "./common/NotFoundPage";
import { Navbar } from "./layout/Navbar";
import { SquidList } from "./squids/SquidList";

import "../style/main.pcss";

const App = () => {
  /*
  Defaults:
  - retry: false because we don't want to retry on network errors
  - refetchOnWindowFocus: true because we want to refetch data on window focus -- this easily hides
    bugs in development
  */
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/squids/pages/1" />
          </Route>
          <Route exact path="/squids/pages/:page" component={SquidList} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default hot(App);
