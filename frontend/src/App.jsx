import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/auth/UserContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CompanyList from "./components/company/CompanyList";
import CompanyDetails from "./components/company/CompanyDetails";
import JobsList from "./components/jobs/JobsList";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  const [userData, setUserData] = useState({});

  const login = (token) => setUserData({ token });

  const register = (token) => setUserData({ token });

  const logout = () => {
    setUserData({});
  };

  return (
    <>
      <div className="app" data-bs-theme="dark">
        <UserContext.Provider value={{ userData, logout }}>
          <BrowserRouter>
            <Navbar />
            <main className="main">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <ProtectedRoute exact path="/companies">
                  <CompanyList />
                </ProtectedRoute>
                <ProtectedRoute exact path="/jobs">
                  <JobsList />
                </ProtectedRoute>
                <ProtectedRoute exact path="/companies/:handle">
                  <CompanyDetails />
                </ProtectedRoute>
                <Route exact path="/login">
                  <LoginForm login={login} />
                </Route>
                <Route exact path="/register">
                  <SignupForm register={register} />
                </Route>
                <Route>
                  <p className="text-warning font-weight-bold">
                    Hmmm. I can't seem to find what you want.
                  </p>
                </Route>
              </Switch>
            </main>
          </BrowserRouter>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
