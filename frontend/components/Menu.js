import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";
import { Container, Button } from 'bloomer';

const menuStyle = {
  position: 'fixed',
  backgroundColor: '#fff',
  zIndex: 1,
  left: 0,
  right: 0,
  top: 0,
  borderBottomWidth: 1,
  borderBottomColor: '#f3f3f3',
  borderBottomStyle: 'solid',
}

const containerStyle = {
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const linkStyle = {
  marginRight: 15
};

const homeLinkStyle = {
  marginRight: 15,
  backgroundImage: 'url(/static/images/logo_blue.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
  fontSize: 0,
  height: 60,
  width: 100,
};

class Menu extends Component {
  constructor() {
      super();
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
      const menuItems = this.props.menu.items.map((item, index) => {
        if (item.object === "custom") {
            return (
                <Link href={item.url} key={item.ID}>
                    <a style={linkStyle}>{item.title}</a>
                </Link>
            );
        }
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "post";
        return (
            <Link
                as={`/${item.object}/${slug}`}
                href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                key={item.ID}
            >
                <a style={linkStyle}>{item.title}</a>
            </Link>
        );
    });


    return(
      <div style={menuStyle}>
        <Container style={containerStyle}>
          <Link href="/">
              <a style={homeLinkStyle}>Home</a>
          </Link>
          <div style={containerStyle}>
            {/*menuItems*/}
            <Link href="/">
              <Button isColor='primary'>Join Coveo</Button>
            </Link>
          </div>
        </Container>
      </div>
    )
  }


}

export default Menu;
