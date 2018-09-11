import Layout from "../components/Layout"
import React, { Component } from "react"
import fetch from "isomorphic-unfetch"
import Link from "next/link"
import PageWrapper from "../components/PageWrapper"
import Menu from "../components/Menu"
import OpeningCard from "../components/OpeningCard"
import CityCard from "../components/CityCard"
import PerkCard from "../components/PerkCard"
import SocialCard from "../components/SocialCard"
import JobsFilter from "../components/JobsFilter"
import CallToActionBanner from "../components/CallToActionBanner"
import YouTube from 'react-youtube'
import { Container, HeroBody, Columns, Column, Title, Subtitle } from 'bloomer'
import { Config } from "../config"

const perksStyle = {
  backgroundColor: '#f8f8f8',
}

const socialStyle = {
  backgroundColor: '#fff',
  maxWidth: 720,
  margin: 'auto',
}

const containerMaxWidth = {
  maxWidth: 800,
  margin: 'auto',
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

    renderPerks(perks) {
      let perksArray = [];
      perks.forEach(perk => {
        perksArray.push(
          <Column isSize='1/2'>
            <PerkCard 
              image={perk.image.url}
              title={perk.title} 
              subtitle={perk.subtitle} 
            />
          </Column>
        );
      });
      return perksArray;
    }

    renderCities(cities) {
      console.log(cities)
      let citiesArray = [];
      cities.forEach(city => {
        citiesArray.push(
          <Column isSize='1/2'>
            <CityCard
              image={city.city_image.url}
              title={city.city_name}
              subtitle={city.city_address}
              description={city.city_description}
              directionsLink={city.city_directions_url}
              directionsText="Google link">
            </CityCard>
          </Column>
        );
      });
      return citiesArray;
    }

    renderSocialLinks(socialLinks) {
      let socialLinksArray = [];
      socialLinks.forEach(socialLink => {
        socialLinksArray.push(
          <Column isSize='1/3'>
            <SocialCard 
              image={socialLink.image.url}
              link={socialLink.link}
              subtitle={socialLink.subtitle} 
            />
          </Column>
        );
      });
      return socialLinksArray;
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
                <HeroBody>
                  <Container style={containerMaxWidth} hasTextAlign='centered'>
                    <Title>{this.props.page.title.rendered}</Title>
                    <br/>
                    <Subtitle>Change the future of health care. Change lives.</Subtitle>
                  </Container>
                </HeroBody>
                <br/>
                <Container style={containerMaxWidth} hasTextAlign='centered'>
                  <JobsFilter />
                </Container>
                <br/>
                <br/>
                <br/>
                <Container hasTextAlign='centered'>
                  <YouTube
                    videoId="2g811Eo7K8U"
                  />
                </Container>
                <br/>
                <HeroBody>
                  <Container style={containerMaxWidth} hasTextAlign='centered'>
                    <Title>{this.props.page.acf.about_coveo_title}</Title>
                    <br/>
                    <Subtitle>{this.props.page.acf.about_coveo_subtitle}</Subtitle>
                  </Container>
                </HeroBody>
                <br/>
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
                <br/>
                <HeroBody>
                  <Container style={containerMaxWidth} hasTextAlign='centered'>
                    <Title>{this.props.page.acf.about_coveo_title}</Title>
                    <br/>
                    <Subtitle>{this.props.page.acf.about_coveo_subtitle}</Subtitle>
                  </Container>
                </HeroBody>
                <br/>
                <Columns isCentered>
                  {this.renderCities(this.props.page.acf.cities_repeater)}
                </Columns>

                {/*<h2>Posts</h2>
                {posts}
                <h2>Pages</h2>
                {pages}*/}
              </Container>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <section style={perksStyle}>
                <Container>
                  <HeroBody>
                    <Container hasTextAlign='centered'>
                      <Title>Great perks for every employee.</Title>
                      <Columns style={{flexWrap: 'wrap'}}>
                        {this.renderPerks(this.props.page.acf.perks_repeater)}
                      </Columns>
                    </Container>
                  </HeroBody>
                </Container>
              </section>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <section style={socialStyle}>
                <Container style={containerMaxWidth} hasTextAlign='centered'>
                    <Subtitle>Learn more about life at Oscar</Subtitle>
                    <Columns>
                      {this.renderSocialLinks(this.props.page.acf.social_links_repeater)}
                    </Columns>
                </Container>
              </section>

              <CallToActionBanner 
                title="Let's do this"
                subtitle="Ready to be a part of something big? We can’t wait to meet you."
                image="/static/images/promo-image.png"
                buttonLink="/"
                buttonText="See all open jobs"
              />
            </Layout>
        );
    }
}

export default PageWrapper(Index);
