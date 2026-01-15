import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">Have a question or want to work together? Feel free to reach out!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <h3>Email</h3>
                <p>john.portfolio@email.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📱</span>
              <div>
                <h3>Phone</h3>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>
            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">GitHub</a>
                <a href="#" className="social-icon">LinkedIn</a>
                <a href="#" className="social-icon">Twitter</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div className="success-message">
                <span className="success-icon">✓</span>
                <h3>Thank you for your message!</h3>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                  <span className="arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
