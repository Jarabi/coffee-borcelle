import coffeeImg from '../assets/coffee-image.png';

export default function About() {
    return (
        <section className='about'>
            <div className='about-image'>
                <img
                    src={coffeeImg}
                    alt='Cup of hot coffee on a saucer with coffee beans around the cup'
                />
            </div>
            <div className='about-content'>
                <h2 className='about-content-head'>Dicover Coffee Borcelle</h2>
                <p className='about-content-subheading'>
                    Elevating Your Coffee Experience
                </p>
                <div className='about-content-description'>
                    <p>
                        At Coffee Borcelle, we&apos;re on a mission to redefine
                        your coffee moments. Our carefully curated selection of
                        premium beans, sourced from the world&apos;s most
                        renowned coffee regions.
                    </p>
                    <p>
                        With expert craftsmanship and a commitment to quality,
                        Join us in savoring the art of coffee, one cup at a
                        time.
                    </p>
                </div>
                <a href='#' className='btn-link'>
                    Read More
                </a>
            </div>
        </section>
    );
}
