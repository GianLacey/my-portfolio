import React from 'react'
import Header from '../Header'
import Projects from '../Projects'
import Contact from '../Contact'
import AboutMe from '../AboutMe'
import Footer from '../Footer'

const Home = () => {
    return (
        <div className='z-0 container'>
            <Header></Header>
            <div className='mx-[280px] my-44 flex flex-col items-start' style={{ textShadow: '2px 2px 4px rgba(0, 0, 30, 0.3)' }}>
                <h2><span className='text-white font-subtitle-family font-thin text-[45px] self-start uppercase'>Diseñador web<br /></span></h2>
                <h1 className='text-white text-[92px] font-title-family font-extrabold uppercase self-center' >
                    FrontEnd
                </h1>
                <h3 className='text-white text-5xl font-subtitle-family font-thin self-end uppercase'>Gian Tomas Lacey</h3>
            </div>
            <section id='aboutme'>
                <AboutMe></AboutMe>
            </section>
            <section id='projects'>
                <Projects></Projects>
            </section>
            <section id='contact'>
                <Contact></Contact>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Home
