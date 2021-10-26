import React from 'react'
import About from '../components/about'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

function AboutPage() {
    return (
        <div>
            <Navbar />
            <main>
                <div className="container">
                    <div className="row">
                        <About />
                        <Sidebar />
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    )
}

export default AboutPage
