import Navigation from '@/components/ui/Navigation/Navigation';
import './TestPage.styles.scss';

const TestPage = () => {
  return (
    <div className="Test">
      <p className="Test__description">
        This is the test page
      </p>
      <Navigation />
    </div>
  );
};

export default TestPage;