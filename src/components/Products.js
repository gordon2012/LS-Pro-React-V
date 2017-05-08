import React, { Component } from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import Product from './Product';

export default class extends Component {
  render() {
      const Title = styled.h3`
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        text-align: center;
        margin: 16px 64px;
        padding: 16px;
      `;

      const products = [
        { id: 'crystals', name: 'Raw Crystals', desc: '', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/crystals-155644_640.png'},
        { id: 'globe', name: 'Globe of Observation', desc: '', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/globe-2244276_640.png'},
        { id: 'cauldron', name: 'Cauldron of Wonderous Things', desc: '', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/bubble-2022390_640.png'},
        { id: 'scroll', name: 'Scroll of Magic Missile', desc: '', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/diploma-152024_640.png'}
      ];

      return (
        <div>
            <Title>Products</Title>

            <Row>

            { products.map((p,i) => <Product key={i} data={p} />) }
            </Row>

        </div>
      );
  }
}
