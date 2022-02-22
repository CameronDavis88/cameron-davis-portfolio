import { FaGithub, FaEye } from 'react-icons/fa';

const Projects = props => {
    return (
        <section className='projects-container'>
            <h3>Projects</h3>
            <section className='project-items-container'>
                <section className='project-item'>
                    <img  alt='your-study logo' />
                    <section className='project-btns'>
                        <a href='https://yourstudyproject.site/' className='project-btn'><FaEye size='3rem' />Preview</a>
                        <a href='https://github.com/CameronDavis88/Your-Study-Project' className='project-btn'><FaGithub size='3rem' />Github</a>
                    </section>
                </section>
                <section className='project-item'>
                    <img  alt='random-shopping-co logo'/>
                    <section className='project-btns'>
                        <a href='https://random-shopping-co.netlify.app/' className='project-btn'><FaEye size='3rem' />Preview</a>
                        <a href='https://github.com/CameronDavis88/E-Commerce-Random-Shopping-co' className='project-btn'><FaGithub size='3rem' />Github</a>
                    </section>
                </section>
                <section className='project-item'>
                    <img  alt='your-library logo'/>
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