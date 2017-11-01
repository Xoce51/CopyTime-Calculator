import React, { Component } from 'react';
import Header from './Components/Header';
import Calculator from './Components/Calculator';
import Grid from 'material-ui/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>
        <article>
          <Grid container spacing={0} justify="center">
            <Grid item xs={12} sm={8}>
              <p>loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique</p>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Calculator />
            </Grid>
          </Grid>
        </article>
      </div>
    );
  }
}

export default App;
