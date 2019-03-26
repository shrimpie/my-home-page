# my-home-page
This is my home page hosted on AWS to learn React.js.


<Router>
  <NavBar />
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/about-me" component={ AboutMe } />
  </Switch>
</Router>