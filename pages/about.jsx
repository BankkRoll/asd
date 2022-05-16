const AboutPage = () => {
  return (
    <>
      <h3>Hi, I am Shahnawaz Fakir. I am a freshman at Boston University majoring in Computer Science. 
      Programming, Cybersecurity, Web-Development, Data Science, and Information Technology are some 
      of my academic and professional interests. My hobbies are listening to music, playing drums/guitar, 
      learning new languages, reading, and playing basketball/volleyball.</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
