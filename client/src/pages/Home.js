import React from 'react'
import Navbar from '../components/navbar'
import PostList from '../components/postList'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

function HomePage() {
    return (
        <div>
            <Navbar />
            <main>
                <div className="container">
                    <div className="row">

                        <PostList />
                        <Sidebar />

                    </div>
                </div>
            </main>

            <Footer />

        </div>
    )
}

export default HomePage
