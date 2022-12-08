import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { useSelector } from "react-redux";

import AdminLayout from "./layouts/Admin.js";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);
  //   console.log("Is logged in: ", isLoggedIn);
  return (
    <main>
      {isLoggedIn ? (
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Redirect from="/" to="/login" />
        </Switch>
      )}
    </main>
  );
};

export default App;
