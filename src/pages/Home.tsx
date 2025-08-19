import Profile from "../components/Profile";
import Credentials from "../components/Credentials";

function Home() {
    return (
        <div className="max-w-5xl lg:flex justify-center mx-auto pt-4 gap-8">
            <div className="lg:w-2/5 self-start lg:sticky lg:top-20">
                <Profile />
            </div>
            <div className="lg:w-3/5">
                <Credentials />
            </div>
        </div>
    );
}

export default Home;