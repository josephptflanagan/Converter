import React from 'react';

function About() {
    return (
        
        <section className="about">
            <div>
                <h1 id="about">About me</h1>
                {/*<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />*/}
            </div>
            <div className="bio">
                <p>
                    Hi, I'm Joseph Flanagan, the creator of this site! I hope these coverters help you with whatever project you are working on.
                </p>
                <br />
                <p>
                    If you have any questions, you can <a href="mailto:josephptflanagan@gmail.com"> email me</a>.
                </p>
            </div>
        </section>
    );
}

export default About;