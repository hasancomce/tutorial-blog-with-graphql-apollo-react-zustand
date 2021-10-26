import React from 'react'

function navbar() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/img/logo.png" alt="Site Logo" />
                    </a>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="html5-templates.html">About</a></li>
                        <li><a href="wordpress-themes.html">Posts</a></li>
                    </ul>
                </div>{/* end of /.navbar-collapse */}
            </div>{/* end of /.container */}
        </nav>
    )
}

export default navbar
