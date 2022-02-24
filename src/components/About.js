import React from 'react';
import profilePic2 from '../assets/img/source/profile-pic-2.jpg';



const About = () => {
  return (
    <section className='about-section' >
        <div className='about-title-box' >
<h5 className='about-title' >"I desire only to know the truth, and to live as well as I can." -Socrates</h5>
            </div>
            <img src={ profilePic2 } alt='profile picture' className='profile-pic-2' />
            <div  className='about-text-box' >
            <p className='about-text' >I am first and foremost a husband and father, and a friend and neighbor. I am also an aspiring Full Stack Web Developer/Programmer/Software Engineer. I am a down-to-earth, conscientious person motivated to honest hard work by a sense of love and duty I feel towards my family, friends, and the rest of humanity.
<br/>
<br/>
I got my bachelor's degree at Brigham Young University - Idaho majoring in Biology and minoring in Chemistry. I also later attended the Devmountain Web Development boot camp learning the basic skills and technologies for full-stack web applications.
<br/>
<br/> 
Honesty, sincerity, individuality, and selflessness are the attributes I admire most in others and which I desire most to embody myself. My conscience and aspirations drive me to grow and work with all diligence and integrity, both privately and professionally, for the sake of those who depend and rely on me -- and to enjoy the process as much as possible ere death take me.

 </p>
            </div>
        </section>
  );
};

export default About;