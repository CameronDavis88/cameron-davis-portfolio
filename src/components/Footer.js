import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = props => {
    return (
        <section className="footer-container">
            <section className='footer-social-icons'>
                <a href='https://github.com/CameronDavis88'><FaGithub size='1.5rem' /></a>
                <a href='https://www.linkedin.com/in/cameron-davis-514b8b207/'><FaLinkedin size='1.5rem' /></a>
            </section>
        </section>
    );
};

export default Footer;