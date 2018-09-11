import React, { Component } from 'react'
import { Box, Control, Button, Columns, Select, Column } from 'bloomer'

const smallColumnStyle = {
  flexShrink: 'unset',
  flexBasis: 'unset',
  flexGrow: 0,
}

export default class JobsFilter extends Component {
  render() {
    return (
      <Box>
        <Columns isVCentered>
          <Column style={smallColumnStyle}>
            <label>Show me</label>
          </Column>
          <Column>
            <Control>
              <Select isFullWidth isSize={'medium'}>
                <option>All</option>
                <option>Option 2</option>
              </Select>
            </Control>
          </Column>
          <Column style={smallColumnStyle}>
            <label>jobs in</label>
          </Column>
          <Column>
            <Control>
                <Select isFullWidth isSize={'medium'}>
                  <option>All locations</option>
                  <option>Option 2</option>
                </Select>
              </Control>
          </Column>
          <Column style={smallColumnStyle}>
            <Button isSize={'medium'}>Go</Button>
          </Column>
        </Columns>
      </Box>
    )
  }
}
