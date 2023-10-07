

const Venue = () => {
    return (
        <div className=" max-w-5xl mx-auto mt-10">

            <h2 className=" text-3xl font-serif font-medium">Venues that will make your event more special</h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className=" text-2xl font-serif font-medium">Bullder farm and pavillion</p>
                    </div>
                    <figure><img src="https://i.ibb.co/wwZL2Rk/1536953692-8b89cf0128841542-1536953690-cab381caa004b392-1536953344208-23-18422096-13254461.webp" className=" w-full" alt="Shoes" /></figure>
                    <div className="ps-6 pb-6">
                        <button className=" text-lg font-serif  font-semibold text-red-600">Call for booking</button>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className=" text-2xl font-serif font-medium">Infinity - Event Venue</p>
                    </div>
                    <figure><img src="https://i.ibb.co/B6f8y4Q/img-0788-51-1042611-162022288625517.webp" className=" w-full" alt="Shoes" /></figure>
                    <div className="ps-6 pb-6">
                        <button className=" text-lg font-serif  font-semibold text-red-600">Call for booking</button>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className=" text-2xl font-serif font-medium">Burns Bluff at High Falls</p>
                    </div>
                    <figure><img src="https://i.ibb.co/PT1RPsQ/img-0509-51-924627-160895742690548.webp" className=" w-full" alt="Shoes" /></figure>
                    <div className="ps-6 pb-6">
                        <button className=" text-lg font-serif  font-semibold text-red-600">Call for booking</button>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className=" text-2xl font-serif font-medium">Huntsville Marriott at the Space & Rocket Center</p>
                    </div>
                    <figure><img src="https://i.ibb.co/J3LNMbV/72178502-1127343750805926-1356232040785117184-o-51-1046683-1572012366.webp" className=" w-full" alt="Shoes" /></figure>
                    <div className="ps-6 pb-6">
                        <button className=" text-lg font-serif  font-semibold text-red-600">Call for booking</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Venue;