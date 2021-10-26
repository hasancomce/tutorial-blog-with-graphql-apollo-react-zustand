import React from 'react'

function footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* copyright */}
                    <div className="col-md-4 col-sm-4">
                        copyright © 2015 <a href="#" style={{ marginLeft: 4 }}>Your website Link</a>
                        <br />
                        Theme by <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
                    </div>
                    {/* footer share button */}
                    <div className="col-md-4 col-sm-4">
                        <ul className="social-share text-center">
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                        </ul> {/* /.social-share */}
                    </div>
                    {/* footer-nav */}
                    <div className="col-md-4 col-sm-4">
                        <ul className="footer-nav">
                            <li><a href="about.html">About</a></li>
                            <li><a href="privacy.html">Privacy</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul> {/* /.footer-nav */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer
