import React from 'react'

function contactForm() {
    return (

        <section className="contact-form">
            <h1>Contact </h1>
            <p>
                Welcome for contact us, if you have any question or want writing us or advertising here. Please kindly contact us by email <strong>info.technext@it</strong> or leave a reply here with form bellow. We will reply to you as soon as possible.
            </p>
            <form method="post" action="contact.php">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input name="name" type="text" className="form-control" id="name" required="required" placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                            <input name="email" type="email" className="form-control" id="email" required="required" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <input name="website" type="url" className="form-control" id="subject" required="required" placeholder="Your Website" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <textarea name="message" type="text" className="form-control" id="message" rows={8} required="required" placeholder="Type here message" defaultValue={""} />
                    </div>
                </div>
                <button type="submit" id="submit" name="submit" className="btn btn-contact">send message</button>
            </form>
        </section>
    )
}

export default contactForm
