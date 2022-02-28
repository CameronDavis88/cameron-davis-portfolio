import profilePic from '../assets/img/source/profile-pic.jpg';
import { FaGithub, FaLinkedin, FaFileWord } from 'react-icons/fa';

const Intro = props => {
    return (
        <section className='intro-container'>
            <div className='name-title' >
                <h1>Cameron Davis</h1>
                <h4>Software Engineer / Web Developer</h4>
            </div>
            <img src={profilePic} alt='profile picture' className='profile-pic' />
            <section className='social-icons'>
                <div className='each-icon' >
                    <a href='https://github.com/CameronDavis88'><FaGithub size='2.5rem' /><h6>My GitHub</h6></a>
                </div>
                <div className='each-icon' >
                    <a href='https://www.linkedin.com/in/cameron-davis-514b8b207/'><FaLinkedin size='2.5rem' /><h6>My LinkedIn</h6></a>
                </div>
                <div className='each-icon' >
                    <a href='https://docs.google.com/document/d/1FkFQ68i0zlFsF19WRVv-ZFvTq_aI24--nOWkVFhCTdY/edit?usp=sharing'><FaFileWord size='2.5rem' /><h6>My Resume</h6></a>
                </div>
            </section>
        </section>
    );
};

export default Intro;