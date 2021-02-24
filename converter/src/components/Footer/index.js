import React from 'react';
import gitHubLogo from "../../assets/icons/GitHub-Mark.png"


function Footer() {
    return (
        <footer>
            <a className="footer-link" href="https://github.com/josephptflanagan">
                <img src={gitHubLogo} alt="Git Hub Repository" width="64" height="64"/>
            </a>
        </footer>
    );
}

export default Footer;