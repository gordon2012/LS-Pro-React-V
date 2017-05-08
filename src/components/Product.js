import React, { Component } from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export default class extends Component {
  render() {
      const Card = styled(Col)`
        border: 1px solid red;
      `;

      return (
        <Card xs={6}>
            { this.props.data.name }
        </Card>
      );
  }
}
