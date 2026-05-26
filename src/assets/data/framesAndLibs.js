import ReactIcon from "../images/react.svg"
import ExpressIcon from "../images/express.svg"
import ViteIcon from "../images/vite.svg"
import NumPyIcon from "../images/numpy.svg"
import PandasIcon from "../images/pandas.svg"
import MatplotlibIcon from "../images/matplotlib.svg"
import TensorFlowIcon from "../images/tensorflow.svg"
import ScikitLearnIcon from "../images/scikitlearn.svg"
import JUnitIcon from "../images/junit.svg"
import TailwindIcon from "../images/tailwind.svg"
import MicroPyIcon from "../images/micropython.svg"
import IpoptIcon from "../images/coinor.png"
import ReactNativeIcon from "../images/react-native.svg"
import PyTorchIcon from "../images/pytorch.svg"
import OpenCVIcon from "../images/opencv.svg"
import GNUBisonIcon from "../images/gnu-bison.png"
import FastAPIIcon from "../images/fastapi.svg"

const machineLearningFL = [
    {
        id: "pytorch",
        name: "PyTorch",
        icon: PyTorchIcon,
        description: "Deep Learning Framework",
    },
    {
        id: "tensorflow",
        name: "TensorFlow",
        icon: TensorFlowIcon,
        description: "ML Library",
    },
    {
        id: "scikitlearn",
        name: "scikit-learn",
        icon: ScikitLearnIcon,
        description: "ML Library",
    },
    {
        id: "opencv",
        name: "OpenCV",
        icon: OpenCVIcon,
        description: "Computer Vision Library",
    },
    {
        id: "numpy",
        name: "NumPy",
        icon: NumPyIcon,
        description: "Numerical Computing Library",
    },
    {
        id: "pandas",
        name: "Pandas",
        icon: PandasIcon,
        description: "Data Analysis Library",
    },
    {
        id: "matplotlib",
        name: "Matplotlib",
        icon: MatplotlibIcon,
        description: "Data Visualization Library",
    },
]

const webDevFL = [
    {
        id: "react-native",
        name: "React Native",
        icon: ReactNativeIcon,
        description: "Mobile Development",
    },
    {
        id: "react",
        name: "React",
        icon: ReactIcon,
        description: "Frontend Framework",
    },
    {
        id: "fastapi",
        name: "FastAPI",
        icon: FastAPIIcon,
        description: "API Framework",
    },
    {
        id: "express",
        name: "Express.js",
        icon: ExpressIcon,
        description: "Backend Framework",
    },
    {
        id: "vite",
        name: "Vite",
        icon: ViteIcon,
        description: "Build Tool",
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: TailwindIcon,
        description: "CSS Framework",
    },
]

const otherFL = [
    {
        id: "gnu-bison",
        name: "GNU Bison",
        icon: GNUBisonIcon,
        description: "Parser for Compilers",
    },
    {
        id: "junit",
        name: "JUnit",
        icon: JUnitIcon,
        description: "Testing Framework",
    },
    {
        id: "micropython",
        name: "MicroPython",
        icon: MicroPyIcon,
        description: "Python for Microcontrollers",
    },
    {
        id: "ipopt",
        name: "IPOPT",
        icon: IpoptIcon,
        description: "Nonlinear Optimization",
    },
]

export { machineLearningFL, webDevFL, otherFL }