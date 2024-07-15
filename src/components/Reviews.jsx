import cupImg from '../assets/cup-image.png';

export default function Reviews() {
    const userReviews = [
        {
            user: '@elonmusk',
            review: 'Indulge in the sublime experience of Coffee Borcelle, where every sip is a journey to flavor paradise. Crafted with precision, our rich blends ignite the senses and redefine coffee appreciation.',
        },
        {
            user: '@JeffBezos',
            review: 'Discover a world of taste with Coffee Brocelle. Each cup is a masterpiece, blending aromas and flavors that dance on your palate. Join us in celebrating coffee at its finest.',
        },
        {
            user: '@MrBeast',
            review: 'Welcome to the heart and soul of coffee passion –Coffee Borcelle. Our carefully curated beans are an ode to craftsmanship, brewing a story of perfection in every cup.',
        },
    ];

    return (
        <section className='reviews'>
            <div className='reviews-heading'>
                <h2>Reviews</h2>
                <img src={cupImg} alt='cup' />
            </div>
            <p className='reviews-subtitle'>What other people are saying!</p>
            <div className='user-reviews'>
                {userReviews.map((review, index) => (
                    <div key={index} className='review'>
                        <p>{review.review}</p>
                        <span>{review.user}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
