/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('Untitled.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('doc1.html', language)}>Example Link</Button>
            <Button href={docUrl('doc2.html', language)}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="threeColumn">
    {[
      {
        content: 'Plan your perfect trip effortlessly',
        image: imgUrl('route.svg'),
        imageAlign: 'top',
        title: 'Plan',
      },
      {
        content: 'Travel the world! Alone or not!',
        image: imgUrl('airplane.svg'),
        imageAlign: 'top',
        title: 'Travel',
      },
      {
        content: 'Share your trips with your friends. Advise them!',
        image: imgUrl('relationship.svg'),
        imageAlign: 'top',
        title: 'Share',
      },
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>What do we offer</h2>
    <MarkdownBlock> *Share* your Routes with your friends</MarkdownBlock>
    <MarkdownBlock> *Make Lists* of places for your friends to enjoy</MarkdownBlock>
    <MarkdownBlock> *Plan* routes with the help of artificial intelligence</MarkdownBlock>
    <MarkdownBlock> And Much More..</MarkdownBlock>
    <MarkdownBlock> _*Anywhere, Anytime, Any Platform*_</MarkdownBlock>
  </div>
);

const LearnWhy = () => (
  <Block background="light">
    {[
      {
        content: "Sometimes planning a trip is just too much.\n\n All the services that gather information in just one place are just another mountain we have to overcome while compiling all the places we would like to visit.\n What if, there was a service that automagically took all those struggles for me, leaving up to me only the joy of the trip itself?\n\n That is what we are trying to anchieve!",
        image: 'https://media.giphy.com/media/3orieRJ5EzFAVmYPq8/giphy.gif',
        imageAlign: 'right',
        title: 'But why?',
      },
    ]}
  </Block>
);

const descriptionText =  'Roadini is a new social network for all the people who love to travel. <br/>With us, you can easily plan your trip, have the best experiences and share with your friends.\n\n <strong>It could not be easier!</strong>'
const LearnWhat = () => (
  <Block id="what">
    {[
      {
        content: descriptionText,
        image: 'https://media.giphy.com/media/hQHZvqCInsRLW/giphy.gif',
        imageAlign: 'left',
        title: 'So what do we offer ? ',
      },
    ]}
  </Block>
);

const LearnHow = () => (
  <Block background="dark">
    {[
      {
        content: "Leveraging the power of \n\n<strong>Artificial intelligence</strong>\n\n<strong>The cloud</strong>\n\n<strong>All wraped up in a beautiful Service Oriented Architecture</strong>",
        image: 'https://media.giphy.com/media/HwOmxUKFFNEwU/giphy.gif',
        imageAlign: 'right',
        title: 'How are we gonna do this ?',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
      <div>
          <div>
              <a href={user.infoLink} key={user.infoLink}>
                  <img  className="imgBorderRadius" src={user.image} alt={user.caption} title={user.caption} />
              </a>
          </div>
      </div>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Meet the Team!</h2>
      <p>This project is being built by this lovely group of wannabes developers</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout/>
          <LearnWhy />
          <LearnWhat />
          <LearnHow />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
