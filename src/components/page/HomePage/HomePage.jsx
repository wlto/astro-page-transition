import Navigation from '@/components/ui/Navigation/Navigation';
import './HomePage.styles.scss';

const HomePage = () => {
  return (
    <div className="Home">
      <p className="Home__description">
        This is the home page
      </p>
      <Navigation />
    </div>
  );
};

export default HomePage;