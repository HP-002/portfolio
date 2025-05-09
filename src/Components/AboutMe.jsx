import ProfileImage from './../assets/profile.jpg';

function AboutMe() {
    return (
        <div
                className="m-5 p-5 bg-gray-950 rounded-lg shadow-sm shadow-amber-50
                flex justify-between items-center"
            >
                <div>
                    <h1
                        className="text-3xl text-left text-amber-50 font-bold"
                    >
                        Het Patel
                    </h1>
                    <div
                        className="text-xl text-left text-gray-400 font-semibold"
                    >
                        Computer Science Student
                    </div>
                    <div
                        className="text-lime-50"
                        >
                        <button
                            className="p-2 mt-2 rounded-2xl
                            bg-gradient-to-r from-teal-500 to-teal-900"
                        >
                            Resume
                        </button>
                    </div>
                </div>

                <div>
                    <img
                        src={ProfileImage}
                        className="w-35 rounded-full"
                    />
                </div>
            </div>
    )
}

export default AboutMe