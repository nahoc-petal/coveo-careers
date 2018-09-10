import React, { Component } from 'react'
import Link from "next/link"
import { Title , Subtitle, Column, Columns } from 'bloomer'

const cardStyle = {
  flexDirection: 'column',
}

export default class CityCard extends Component {
  render() {
    const {
      title,
      img,
      subtitle,
      description,
      directionsLink,
      directionsText
    } = this.props;

    return (
      <div style={cardStyle}>
        <img
          src={img}
          width="815"
        />
        <Columns>
          <Column>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Column>
          <Column>
            <p>{description}</p>
          </Column>
        </Columns>
        <Link href={directionsLink}>{directionsText}</Link>
      </div>
    )
  }
}
