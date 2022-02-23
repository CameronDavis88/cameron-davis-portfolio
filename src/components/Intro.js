import profilePic from '../assets/img/source/profile-pic.jpg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaRegFileWord, FaFileWord } from 'react-icons/fa';

const Intro = props => {
    return (
        <section className='intro-container'>
            <h1>Cameron Davis</h1>
             change color scheme and add a little about section 
            {/* maybe have an about section with little thing about me -- or maybe do that later and first load it without that */}
            <img src={ profilePic } alt='profile picture' className='profile-pic' height={'300vh'}  />
            <section className='social-icons'>
                <div className='each-icon' >
                <a href='https://github.com/CameronDavis88'><FaGithub size='2.5rem' /></a>
                <h6>My GitHub</h6>
                </div>
               <div className='each-icon' >
               <a href='https://www.linkedin.com/in/cameron-davis-514b8b207/'><FaLinkedin size='2.5rem' /></a>
                <h6>My LinkedIn</h6>
               </div>
               <div className='each-icon' >
               <a href='https://docs.google.com/document/d/1FkFQ68i0zlFsF19WRVv-ZFvTq_aI24--nOWkVFhCTdY/edit?usp=sharing'><FaFileWord size='2.5rem' /></a>
                <h6>My Resume</h6>
               </div>
            </section>
            {/* <section className='social-icons tablet'>
                <div>
                <a href='https://github.com/CameronDavis88'><FaGithub size='2rem' /></a>
                <h6>My GitHub</h6>
                </div>
                <div>
                <a href='https://www.linkedin.com/in/cameron-davis-514b8b207/'><FaLinkedin size='2rem' /></a>
                <h6>My LinkedIn</h6>
                </div>
            </section>
            <section className='social-icons desktop'>
                <div>
                <a href='https://github.com/CameronDavis88'><FaGithub size='2.5rem' /></a>
                <h6>My GitHub</h6>
                </div>
                <div>
                <a href='https://www.linkedin.com/in/cameron-davis-514b8b207/'><FaLinkedin size='2.5rem' /></a>
                <h6>My LinkedIn</h6>
                </div>
            </section> */}
            <MdKeyboardArrowDown className='section-scroll-down' />
        </section>
    );
};

export default Intro;