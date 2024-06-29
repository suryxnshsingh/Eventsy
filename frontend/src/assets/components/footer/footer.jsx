import React from 'react';
import './footer.css'; // Assuming you have a separate CSS file for footer styles

const Footer = () => {
    return (
        <footer className="footer" style={{width : '100%', height : '30%' }}>
            <div className="column">
                    <h3>Column 1</h3>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Column 2</h3>
                    <ul>
                        <li>Item 5</li>
                        <li>Item 6</li>
                        <li>Item 7</li>
                        <li>Item 8</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Column 3</h3>
                    <ul>
                        <li>Item 9</li>
                        <li>Item 10</li>
                        <li>Item 11</li>
                        <li>Item 12</li>
                    </ul>
                </div>
        </footer>
    );
};

export default Footer;