import UBLogo from "../assets/ublogo.png"
// import coursework from "../data/coursework.js"

function Education() {
    return (
        <div
            className="border-2 border-gray-800 bg-gray-900 text-white p-4 rounded-lg shadow-lg m-4
            flex flex-col sm:flex-row gap-4 items-center justify-between"
        >
            {/* Left */}
            <div
                className="sm:flex gap-4 justify-start items-center"
            >
                <img
                    className="h-18 hidden sm:block"
                    src={UBLogo}
                    alt=""
                />
                <div
                    className=""
                >
                    <h1
                        className="text-2xl font-bold text-gray-200"
                    >
                        University at Buffalo
                    </h1>
                    <h1
                        className="text-xl font-semibold text-gray-300"
                    >
                        BS in Computer Science
                    </h1>
                    <p
                        className="font-semibold text-gray-300"
                    >
                        Minor: Statistics

                    </p>
                    <p
                        className="font-semibold text-gray-300"
                    >
                        GPA: 3.8/4.0
                    </p>
                    <p
                        className="font-semibold text-gray-300"
                    >
                        Graduation: May 2024
                    </p>

                </div>

            </div>

            {/* Right */}
            <div>
                Word Cloud
            </div>
        </div>
    )
}

export default Education