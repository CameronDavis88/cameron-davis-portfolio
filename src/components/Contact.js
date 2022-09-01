import { MdEmail, MdPhoneIphone, MdLocationCity, MdWork } from 'react-icons/md';

const Contact = props => {
    return (
        <section className="contact-container">
            {/* <div>
            <h3>Contact:</h3>
            </div>
             */}
            <section className='contact-items'>
                <section className='contact-item'>
                    <a href='mailto:cameron.s.davis99@gmail.com'><h5><MdEmail />Email</h5>cameron.s.davis99@gmail.com</a>
                </section>
                <section className='contact-item'>
                    <a href='tel:+13607736405'><h5><MdPhoneIphone />Phone</h5>360.773.6405</a>
                </section>
                <section className='contact-item'>
                    <div>
                    <h5><MdLocationCity />Location</h5>Logan, UT
                    </div>
                </section>
                <section className='contact-item'>
                    <div>
                    <h5><MdLoMdWork />Work</h5>Journal Technologies
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Contact;