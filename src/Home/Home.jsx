
import Contact from '../ContactMe/ContactMe';
import Eduction from '../Education/Eduction';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
            <Skill></Skill>
            <Project></Project>
            <Eduction></Eduction>
            <Contact></Contact>
        </div>
    );
};

export default Home;