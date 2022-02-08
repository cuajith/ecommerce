import React from 'react';
import "./Footer.css"

function Footer() {
    return (
        <footer class="footer" id="footer">

            <span class="col">
                <h3 class="col-title">Info</h3>
                <nav class="col-list">
                    <ul>
                        <li><a href="#">Formats</a></li>
                        <li><a href="#">Compression</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Status</a></li>
                    </ul>
                </nav>
            </span>

            <span class="col">
                <h3 class="col-title">Resources</h3>
                <nav class="col-list">
                    <ul>
                        <li><a href="#">Developer API</a></li>
                        <li><a href="#">Tools</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </span>

            <span class="col">
                <h3 class="col-title">TOP CATEGORIES</h3>
                <nav class="col-list">
                    <ul>
                        <li><a href="#">MAKEUP</a></li>
                        <li><a href="#">SKIN</a></li>
                        <li><a href="#">HAIR</a></li>
                        <li><a href="#">PERSONAL CARE</a></li>
                        <li><a href="#">HOME AND KITCHEN</a></li>
                        <li><a href="#">KIDS</a></li>
                        <li><a href="#">ELECTRONICS</a></li>
                    </ul>
                </nav>
            </span>

        </footer>
    )
}

export default Footer;
