import { useLoaderData } from "react-router-dom";
import WeddDatacard from "../Components/WeddDatacard";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";

const Home = () => {
    const wedd = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className=" text-center mt-10 text-2xl font-serif font-medium">Services we provide..</h2>
            </div>
            <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    wedd.map(data => <WeddDatacard key={data.id} data={data}></WeddDatacard>)
                }

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;