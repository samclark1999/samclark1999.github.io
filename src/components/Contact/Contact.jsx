import Icon from "../Icon/Icon";
import { profile } from "../../data/profile";
import { getMailtoHref, getEmailAddress } from "../../utils/email";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact section section--ink">
      <div className="container contact-inner">
        <div className="section-heading">
          <p className="eyebrow section-heading__eyebrow">Get In Touch</p>
          <h2>Let's build something</h2>
        </div>

        <ul className="contact-grid">
          {profile.socials.map((social) => {
            const isEmail = social.name === "Email";
            const href = isEmail ? getMailtoHref() : social.href;
            const description = isEmail
              ? getEmailAddress()
              : social.description;

            return (
              <li key={social.name}>
                {/* mailto: isn't a document to open in a new tab — target="_blank" on it
                    just leaves a blank tab behind in most browsers. */}
                <a
                  href={href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="contact-card"
                >
                  <span className="contact-card__icon">
                    <Icon name={social.icon} size={22} />
                  </span>
                  <span className="contact-card__body">
                    <span className="contact-card__title">{social.name}</span>
                    <span className="contact-card__description">
                      {description}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
