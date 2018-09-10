import Layout from "../components/Layout"
import React, { Component } from "react"
import fetch from "isomorphic-unfetch"
import Link from "next/link"
import PageWrapper from "../components/PageWrapper"
import Menu from "../components/Menu"
import Breadcrumbs from "../components/Breadcrumbs"
import OpeningCard from "../components/OpeningCard"
import CityCard from "../components/CityCard"
import { Container, HeroBody, Columns, Column, Title, Subtitle } from 'bloomer'
import { Config } from "../config"

const perksStyle = {
  backgroundColor: '#f8f8f8',
}

class Index extends Component {
    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=welcome`
        );
        const page = await pageRes.json();
        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/posts?_embed`
        );
        const posts = await postsRes.json();
        const pagesRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/pages?_embed`
        );
        const pages = await pagesRes.json();
        return { page, posts, pages };
    }

    render() {
        const posts = this.props.posts.map((post, index) => {
            return (
                <ul key={index}>
                    <li>
                        <Link
                            as={`/post/${post.slug}`}
                            href={`/post?slug=${post.slug}&apiRoute=post`}
                        >
                            <a>{post.title.rendered}</a>
                        </Link>
                    </li>
                </ul>
            );
        });
        const pages = this.props.pages.map((page, index) => {
            return (
                <ul key={index}>
                    <li>
                        <Link
                            as={`/page/${page.slug}`}
                            href={`/post?slug=${page.slug}&apiRoute=page`}
                        >
                            <a>{page.title.rendered}</a>
                        </Link>
                    </li>
                </ul>
            );
        });

        return (
            <Layout>
              <Menu menu={this.props.headerMenu} />
              <Container>
                <br/>
                <Breadcrumbs />
                <HeroBody>
                  <Container hasTextAlign='centered'>
                    <Title>{this.props.page.title.rendered}</Title>
                    <Subtitle>Change the future of health care. Change lives.</Subtitle>
                  </Container>
                </HeroBody>
                <HeroBody>
                  <Container hasTextAlign='centered'>
                    <Title>{this.props.page.acf.about_coveo_title}</Title>
                    <Subtitle>{this.props.page.acf.about_coveo_subtitle}</Subtitle>
                  </Container>
                </HeroBody>
                <Columns isCentered>
                  <Column isSize='1/3'>
                    <OpeningCard
                      title="Allo maman"
                      subtitle="Allo maman"
                      link="https://google.ca"
                      linkText="Google link">
                    </OpeningCard>
                  </Column>
                  <Column isSize='1/3'>
                  <OpeningCard
                      link="https://google.ca"
                      linkText="Google link">
                    </OpeningCard>
                  </Column>
                  <Column isSize='1/3'>
                  <OpeningCard
                      link="https://google.ca"
                      linkText="Google link">
                    </OpeningCard>
                  </Column>
                </Columns>
                <HeroBody>
                  <Container hasTextAlign='centered'>
                    <Title>{this.props.page.acf.about_coveo_title}</Title>
                    <Subtitle>{this.props.page.acf.about_coveo_subtitle}</Subtitle>
                  </Container>
                </HeroBody>
                <Columns isCentered>
                  <Column isSize='1/2'>
                    <CityCard
                      title="Allo maman"
                      subtitle="Allo maman"
                      description="Welcome to Oscar HQ, situated in the landmark Puck building in vibrant SoHo and surrounded by designer boutiques, art galleries, and some of NYC’s best restaurants. The headquarters is home to Oscar’s Marketing, Technology, People, and Operations teams."
                      directionsLink="https://google.ca"
                      directionsText="Google link">
                    </CityCard>
                  </Column>
                  <Column isSize='1/2'>
                    <CityCard
                      img="/static/images/wordpress-plus-react-header.png"
                      title="Allo maman"
                      subtitle="Allo maman"
                      description="Welcome to Oscar HQ, situated in the landmark Puck building in vibrant SoHo and surrounded by designer boutiques, art galleries, and some of NYC’s best restaurants. The headquarters is home to Oscar’s Marketing, Technology, People, and Operations teams."
                      directionsLink="https://google.ca"
                      directionsText="Google link">
                    </CityCard>
                  </Column>
                </Columns>

                <div
                    dangerouslySetInnerHTML={{
                        __html: this.props.page.content.rendered
                    }}
                />
                <h2>Posts</h2>
                {posts}
                <h2>Pages</h2>
                {pages}
              </Container>
              <section style={perksStyle}>
                <Container>
                  <HeroBody>
                    <Container hasTextAlign='centered'>
                      <Title>Great perks for every employee.</Title>
                    </Container>
                  </HeroBody>
                  </Container>
                </section>
            </Layout>
        );
    }
}

export default PageWrapper(Index);
