import React, { Component } from 'react';
import styled from 'styled-components';

export default class extends Component {
  render() {
      const Title = styled.h1`
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        text-align: center;
        margin: 16px 64px;
        padding: 16px;
      `;
      return (
        <div>
            <Title>Magical Components</Title>
            <h3>An ecommerce site for the modern wizard.</h3>
            <h4>Your #1 source for hard to source reagents such as:</h4>
            <ul>
                <li>Eye of Newt</li>
                <li>Bone Chips</li>
                <li>Peridot</li>
                <li>Cat's Eye Agate</li>
                <li>Diamonds</li>
                <li>Rubies</li>
                <li>And much more</li>
            </ul>
        </div>
      );
  }
}
