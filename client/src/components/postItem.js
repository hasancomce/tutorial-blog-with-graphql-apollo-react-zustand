import React from 'react'

function postItem() {
    return (
        <article className="blog-item">
            <div className="row">
                <div className="col-md-3">
                    <a href="single_blog_page.html">
                        <img src="assets/img/corporate.jpg" className="img-thumbnail center-block" alt="Blog Post Thumbnail" />
                    </a>
                </div>
                <div className="col-md-9">
                    <p>
                        in
                        <a href="html5-templates.html">html5</a>
                        ,
                        <a href="#">templates</a>
                        <time>23-july-2015<time>
                        </time></time></p>
                    <h1>
                        <a href="single_blog_page.html">50+ best free responsive corporate template in 2015</a>
                    </h1>
                </div>
            </div>
        </article>
    )
}

export default postItem
