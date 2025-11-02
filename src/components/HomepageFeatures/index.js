import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Sara',
  Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Full-Stack Software Engineer with experience in HTML/CSS, JavaScript,
        React and Node.js. Passionate about building robust web applications
        and documenting projects and patterns for future reference.
      </>
    ),
  },
  {
    title: 'Top Skills',
  Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Responsive Web Design · React · Express.js · Node.js · REST APIs ·
        Testing and CI/CD.
      </>
    ),
  },
  {
    title: 'Open to Opportunities',
  Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Based in the San Francisco Bay Area. Feel free to reach out via
        LinkedIn or email for collaborations, contract work, or full-time
        opportunities.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
