import video2 from '../app/assets/video2.mp4';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeroBanner from "../components/HeroBanner";
import MacroCalculator from '../features/macroCalculator/MacroCalculator';


const HomePage = () => {
    return (
        <>
            <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src={video2} type='video/mp4' />
                </video>
            </div>
            <div className="homePageContent">
                <HeroBanner />
            </div>
            <div className='homePageContent'>
                <MacroCalculator />
            </div>
        </>
    );
};

export default HomePage;