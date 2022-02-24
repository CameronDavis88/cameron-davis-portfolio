import { FaGithub, FaEye } from 'react-icons/fa';
import randomPrev from '../assets/img/random-shopping-prev.png';
import libraryPrev from '../assets/img/your-library-prev.png';
import studyPrev from '../assets/img/your-study-prev.png';

const Projects = props => {
    return (
        <section className='projects-container'>
            <h3>Personal Demo Projects</h3>
            <section className='project-items-container'>
                <section className='project-item'>
                    <img src={studyPrev} alt='your-study logo' className='project-cover' />
                    <section className='project-btns'>
                        <a href='https://yourstudyproject.site/' className='project-btn'><FaEye size='3rem' />Preview</a>
                        <a href='https://github.com/CameronDavis88/Your-Study-Project' className='project-btn'><FaGithub size='3rem' />Github</a>
                    </section>
                </section>
                <section className='project-item'>
                    <img src={randomPrev} alt='random-shopping-co logo' className='project-cover' />
                    <section className='project-btns'>
                        <a href='https://random-shopping-co.netlify.app/' className='project-btn'><FaEye size='3rem' />Preview</a>
                        <a href='https://github.com/CameronDavis88/E-Commerce-Random-Shopping-co' className='project-btn'><FaGithub size='3rem' />Github</a>
                    </section>
                </section>
                <section className='project-item'>
                    <img src={libraryPrev} alt='your-library logo' className='project-cover' />
                    <section className='project-btns'>
                        <a href='http://147.182.193.201:5656/' className='project-btn'><FaEye size='3rem' />Preview</a>
                        <a href='https://github.com/CameronDavis88/Your-Library' className='project-btn'><FaGithub size='3rem' />Github</a>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Projects;