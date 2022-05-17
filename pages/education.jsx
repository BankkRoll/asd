import { useState } from 'react';
import ContactCode from '../components/EducationPage';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Education</h3>
        <ContactCode />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Education' },
  };
}

export default ContactPage;