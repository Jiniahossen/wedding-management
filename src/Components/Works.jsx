import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Works = () => {

    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className=" my-10">
            <h1 className=" text-center text-2xl font-serif font-medium mb-10">Some of our work</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 h-50">
                <div className="card image-full" data-aos='slide-left'>
                    <figure><img src="https://i.ibb.co/X5BVHLR/wedding-couple-best-friends-dressed-fashionable-wedding-attires-are-standing-line-green-yard.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card image-full" data-aos='zoom-in-up'>
                    <figure><img src="https://i.ibb.co/Jm6gBpP/couple-altar.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card  image-full" data-aos='slide-right'>
                    <figure><img src="https://i.ibb.co/Lpm6p5S/happy-newlyweds-hugging-each-other.jpg" alt="Shoes" /></figure>
                </div>
                

                </div>

        </div>


    );
};

export default Works;