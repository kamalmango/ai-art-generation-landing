
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Create art with AI"
        description="Enter a prompt and bring your idea to life in seconds"
        showBtn
        mockupImg={assets.distantGalaxy}
        banner="banner"
      />
      <SectionWrapper 
        title="Turn words into art"
        description='Simply describe what you want to paint - such as "Elon Musk in space" or "Life under sea" and hit create'
        mockupImg={assets.elonInSpace}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Unleash your creativity"
        description="Get creative with your prompts: poems, song lyrics, movie characters, star signs, monuments or some unique word combinations"
        mockupImg={assets.astroHorse}
        reverse
      />
      <SectionWrapper 
        title="Showcase your art"
        description="Once you have a unique, original artwork you are happy with, share it on social media or use it as your lockscreen to impress your friends"
        mockupImg={assets.dessertStars}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Mango AI {" "}
        <span className="bold">Art Generation</span>
        </p>
      </div>
    </>
  );
}

export default App;
