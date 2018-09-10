import React, { Component } from 'react'
import Link from "next/link";
import { Title, Box , Subtitle} from 'bloomer';

const cardStyle = {
  flexDirection: 'column',
}

export default class OpeningCard extends Component {
  render() {
    const {
      title,
      subtitle,
      link,
      linkText
    } = this.props;

    return (
      <Box style={cardStyle}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Link href={link}>{linkText}</Link>
      </Box>
    )
  }
}
