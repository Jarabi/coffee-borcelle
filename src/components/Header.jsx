import logoImg from '../assets/logo-image.png';

export default function Header() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '#' },
        { name: 'Features', path: '#' },
        { name: 'Purchase', path: '#' },
        { name: 'Contact Us', path: '#' },
    ];

    return (
        <header>
            <div className='header-logo'>
                <img src={logoImg} alt='logo image' width={250} />
            </div>
            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className='nav-item'>
                            <a
                                className={item.path === '/' && 'active'}
                                href={item.path}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
