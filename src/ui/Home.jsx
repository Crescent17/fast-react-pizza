import CreateUser from "../features/user/CreateUser.jsx";

function Home() {
    return (
        <div className='my-10 sm:my-16 text-center'>
            <h1 className='text-xl text-center font-semibold mb-4'>
                The best pizza.
                <br/>
                <span className='text-yellow-500'>Straight out of the oven, straight to you.</span>
            </h1>
            <CreateUser/>
        </div>
    );
}

export default Home;