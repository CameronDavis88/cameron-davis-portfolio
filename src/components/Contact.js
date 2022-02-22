import { MdEmail, MdPhoneIphone, MdLocationCity } from 'react-icons/md';

const Contact = props => {
    return (
        <section className="contact-container">
            <h3>Contact</h3>
            <section className='contact-items'>
                <section className='contact-item'>
                    <h5><MdEmail />Email</h5>
                    <a href='mailto:cameron.s.davis99@gmail.com'>cameron.s.davis99@gmail.com</a>
                </section>
                <section className='contact-item'>
                    <h5><MdPhoneIphone />Phone</h5>
                    <a href='tel:+13607736405'>360.773.6405</a>
                </section>
                <section className='contact-item'>
                    <h5><MdLocationCity />Location</h5>
                    <p>Provo, UT</p>
                </section>
            </section>
        </section>
    );
};

export default Contact;