import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import Home from './components/Home';
import Products from './components/Products';

export default class extends Component {
  render() {
    const Page = styled.div`
      background-color: whitesmoke;
      color: #2f2f2f;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    `;
    const Header = styled.header`
      background-color: #2f2f2f;
      padding: 16px;
    `;
    const StyledLinkContainer = styled(LinkContainer)`
      margin-right: 16px;
    `;
    const Container = styled.div`
      flex: 1;
      padding: 16px;
      display: flex;
      justify-content: center;
    `;
    const Inner = styled.div`
      background-color: white;
      border: 2px solid lightgrey;
      border-radius: 16px;
      flex-basis: 800px;
      padding: 16px;
    `;
    return (
        <Router>
          <Page>
            <Header>
              <StyledLinkContainer to="/"><Button>Home</Button></StyledLinkContainer>
              <StyledLinkContainer to="/products"><Button>Products</Button></StyledLinkContainer>
            </Header>
            <Container>
              <Inner>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
              </Inner>
            </Container>
          </Page>
        </Router>
    );
  }
}
