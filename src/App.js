import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SamplePage from "./Pages/SamplePage";
import ViewPage from "./Pages/ViewPage";
import ContactsPage from "./Pages/ContactsPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <Container style={{display: "flex"}}>
      <Navigation />
      <div className="page-container">
        <Header />
        <Container style={{ marginTop: "20px" }}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/userprofile" exact component={HomePage} />
            <Route path="/sample" exact component={SamplePage} />
            <Route path="/view" exact component={ViewPage} />
            <Route path="/contacts" exact component={ContactsPage} />
          </Switch>
        </Container>
      </div>
    </Container>
  );
}

export default App;
