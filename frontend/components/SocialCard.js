import React, { Component } from 'react'
import Link from "next/link"
import { Subtitle } from 'bloomer'

export default class SocialCard extends Component {
  render() {
    const {
      image,
      link,
      subtitle
    } = this.props;
    return (
      <Link href={link}>
        <div>
          <img src={image} />
          <Subtitle>{subtitle}</Subtitle>
        </div>
      </Link>
    )
  }
}
