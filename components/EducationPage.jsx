import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    education: 'Boston University',
  },
  {
    education: 'Major: Computer Science',
    // link: 'link',
    // href: 'github.io',
  },
  {
    education: 'Graduation: 2025'
  },

  {
    education: '-------------------------------------'
  },
  {
    education: 'Cambridge Rindge & Latin High School'
  },
  {
    education: 'Graduated: 2021'
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.Education</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.education}{''};
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.education}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
