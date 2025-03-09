import React from 'react';

const ContactMapArea = () => {
    return (
        <>
            <div className="bd-map-area section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="google-map">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d76.92805955!3d28.459497700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1694575134270!5m2!1sen!2sus" 
                                    width="100%" 
                                    height="500" 
                                    style={{border: '0'}} 
                                    allowFullScreen 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMapArea;