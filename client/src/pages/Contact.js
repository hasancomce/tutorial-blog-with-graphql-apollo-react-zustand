import React from 'react'
import ContactForm from '../components/contactForm'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function ContactPage() {
    return (
        <div>
            <Navbar />
            <main>
                <div className="container">
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </div>

    )
}

export default ContactPage
