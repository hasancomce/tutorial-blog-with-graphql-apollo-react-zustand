import React from 'react'

function sidebar() {
    return (
        <aside className="col-md-4 col-sm-8 col-xs-8">
            <div className="sidebar">
                {/* search option */}
                <div className="search-widget">
                    <div className="input-group margin-bottom-sm">
                        <input className="form-control" type="text" placeholder="Search here" />
                        <a href="#" className="input-group-addon">
                            <i className="fa fa-search fa-fw" />
                        </a>
                    </div>
                </div>
                <a href="http://themewagon.com/" className="template-images">
                    <img className="img-responsive" src="assets/img/store1.png" alt="Template Store" />
                    <div className="overlay" />
                </a>
                {/* subscribe form */}
                <div className="subscribe-widget">
                    <h4 className="text-capitalize text-center">
                        get recent update by email
                    </h4>
                    <div className="input-group margin-bottom-sm">
                        <input className="form-control" type="text" placeholder="Your Email" />
                        <a href="#" className="input-group-addon">
                            <i className="fa fa-paper-plane fa-fw" />
                        </a>
                    </div>
                </div>
                {/* sidebar share button */}
                <div className="share-widget hidden-xs hidden-sm">
                    <ul className="social-share text-center">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    </ul> {/* /.sidebar-share-button */}
                </div> {/* /.share-widget */}
            </div>
        </aside>
    )
}

export default sidebar
