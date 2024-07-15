import 'boxicons';
import logoImg from '../assets/logo-image.png';

export default function Footer() {
    const sitemap = ['Home', 'About Us', 'Feature', 'Pricing', 'Contact Us'];
    return (
        <footer>
            <div className='footer-content'>
                <div className='contact-us'>
                    <h4>Contact Us</h4>
                    <p>Send us a message</p>
                    <form>
                        <input type='text' placeholder='Full name' />
                        <input type='email' placeholder='Your email' />
                        <textarea
                            placeholder='Your Message'
                            cols={25}
                            rows={5}
                        ></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className='sitemap'>
                    <h4>Sitemap</h4>
                    <p>All our pages</p>
                    <ul>
                        {sitemap.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='logo-contacts'>
                    <div className='footer-logo'>
                        <img src={logoImg} alt='logo' width={250} />
                    </div>
                    <p>
                        <box-icon
                            name='phone'
                            type='solid'
                            color='white'
                        ></box-icon>{' '}
                        (08) 400 2000
                    </p>
                    <p>
                        <box-icon name='envelope' color='white'></box-icon>
                        coffeeborcelle@gmail.com
                    </p>
                </div>
            </div>
            <div className='copyright'>
                Copyright 2020 All Rights Reserved &middot; Coffee Borcelle
            </div>
        </footer>
    );
}
