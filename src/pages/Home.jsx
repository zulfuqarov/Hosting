import React from 'react'
import Header from '../components/Header'
import AboutCard from '../components/AboutCard'
import Hostingor from '../components/Hostingor'
import Happy from '../components/Happy'
import Quationss from '../components/Quationss'
import Service from '../components/Service'

const Home = () => {
  return (
    <section>
      <Header />
      <AboutCard />
      <Hostingor />
      <Service />
      <Happy />
      <Quationss />
    </section>
  )
}

export default Home
