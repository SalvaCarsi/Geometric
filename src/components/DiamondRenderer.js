'use strict';

import React, { Component } from 'react';

import CircleSmall from './styled/CircleSmall';
import MarginWrapper from './styled/MarginWrapper';
import TableWrapper from './styled/TableWrapper';

import generateArray from '../helpers';

export class DiamondRenderer extends Component {

  renderDiamond = () => {
    return (
      <TableWrapper>
        <tbody>
        {
          generateArray().map( (value, index) => {
            return (
              <tr key={index}>
                <td key={index}>
                  {
                    generateArray().map( (v, i) => {
                      return <CircleSmall/>;
                    })
                  }
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </TableWrapper>
    );
  };

  render = () => {
    return (
      <MarginWrapper>{this.renderDiamond()}</MarginWrapper>
    );
  }

}

export default  DiamondRenderer;