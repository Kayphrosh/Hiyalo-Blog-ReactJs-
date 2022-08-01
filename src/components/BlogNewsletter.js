import React from 'react';
import './BlogNewsletter.css';



const BlogNewsletter = () => {


    return(
        <section className="blog-newsletter-container">
            <main>
                <header>
                    <h3 data-aos="fade-up">
                        Subscribe To Hiyalo Newsletter
                    </h3>
                    <p data-aos="fade-up">
                        For market updates and the latest news from Hiyalo, subscribe to our newsletter.
                    </p>
                </header>
                <form action="" className="newsletter-form">
                    <input type="text" placeholder="Enter email address" name="" id="" data-aos="fade-up"/>
                    <button data-aos="fade-up">
                        <p>subscribe</p>
                        <span className="iconify" data-icon="ant-design:arrow-up-outlined"></span>
                    </button>
                </form>
            </main>
        </section>

    )
}

export default BlogNewsletter;