import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import JoblyApi from "./api/api";
import Home from "./components/Home";
import CompanyList from "./components/CompanyList";
import JobsList from "./components/JobsList";
import Navbar from "./components/Navbar";
import CompanyDetails from "./components/CompanyDetails";

function App() {


  return (
    <>
      <div className="app" data-bs-theme="dark">
        <BrowserRouter>
          <Navbar />
          <main className="main">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/companies">
                <CompanyList/>
              </Route>
              <Route exact path="/jobs">
                <JobsList />
              </Route>
              <Route exact path="/companies/:handle">
                <CompanyDetails />
              </Route>
              <Route>
                <p className="text-warning font-weight-bold">
                  Hmmm. I can't seem to find what you want.
                </p>
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
