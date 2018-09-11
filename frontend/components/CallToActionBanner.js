import React, { Component } from 'react'
import Link from "next/link";
import { Container, Columns, Column, Title, Subtitle, Button } from 'bloomer'

const imageStyle = {
  padding: 80,
}

export default class CallToActionBanner extends Component {
  render() {
    const {
      image,
      title,
      subtitle,
      buttonLink,
      buttonText
    } = this.props
    return (
      <Container>
        <Columns isVCentered>
          <Column isSize='1/2'>
            <img style={imageStyle} src={image} />
          </Column>
          <Column isSize='1/2'>
            <Title>
              {title}
            </Title>
            <br/>
            <Subtitle>
              {subtitle}
            </Subtitle>
            <br/>
            <Link href={buttonLink}>
              <Button isSize={'medium'}>{buttonText}</Button>
            </Link>
          </Column>
        </Columns>
      </Container>
    )
  }
}
