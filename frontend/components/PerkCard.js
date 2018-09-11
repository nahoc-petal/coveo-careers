import React, { Component } from 'react'
import { Title , Subtitle } from 'bloomer'

const perkStyle = {
  backgroundColor: '#fff',
  padding: 90,
}

export default class PerkCard extends Component {
  render() {
    const {
      image,
      title,
      subtitle,
    } = this.props;
    return (
      <div style={perkStyle}>
        <img src={image} />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    )
  }
}
