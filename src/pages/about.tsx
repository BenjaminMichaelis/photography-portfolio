import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Benjamin Michaelis" desc="Hi. I'm Benjamin! You can visit my website or find me around the web." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Benjamin Michaelis!</h1>
        <p>I'm a full-time software engineering student based in Pullman, Washington at WSU-Pullman, Software Intern <a href="https://intellitect.com">@IntelliTect</a>, and part-time adventure seeker/traveler. In my free time I love the outdoors, being active, as well as connecting with friends and family.</p>
        <p>You can find me around the web here:</p>
        <p>
          <a href="https://benjamin.michaelis.net">Find me around the web🌎</a>
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
