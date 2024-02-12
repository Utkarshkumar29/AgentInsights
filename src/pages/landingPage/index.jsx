import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Image1.jpg"
import Image2 from "../../assets/Image2.jpg"
import Image3 from "../../assets/Image3.jpg"
import Image4 from "../../assets/Image4.jpg"
import Image5 from "../../assets/Image5.jpg"
import Image6 from "../../assets/Image6.jpg"
import Image7 from "../../assets/Image7.jpg"
import Image8 from "../../assets/Image8.jpg"
import { SelectQuizContext } from "../../context/selectQuizContext";
import { HoveredImage } from "../../styles/landingPage";

const LandingPage=()=>{
    const {setSelectedQuiz}=useContext(SelectQuizContext)

    return(
        <div className="container mt-5">
            <h1 className="mb-4">Welcome to Quiz!</h1>
            <p>Get ready to test your knowledge. Click the button below to start the quiz!</p>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <Link to="/quiz" className="card text-decoration-none">
                        <HoveredImage src={Image1} alt="Quiz Linux" className="card-img-top image-opacity" onClick={() => setSelectedQuiz("Linux")} />
                        <div className="card-body text-center position-absolute top-50 start-50 translate-middle text-white">
                            <h5 className="card-title fs-1">Linux</h5>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/quiz" className="card text-decoration-none">
                        <HoveredImage src={Image2} alt="Quiz DevOps" className="card-img-top image-opacity" onClick={() => setSelectedQuiz("Networking")} />
                        <div className="card-body text-center position-absolute top-50 start-50 translate-middle text-white">
                            <h5 className="card-title fs-1">Networking</h5>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/quiz" className="card text-decoration-none">
                        <HoveredImage src={Image3} alt="Quiz DevOps" className="card-img-top image-opacity" onClick={() => setSelectedQuiz("Programming")} />
                        <div className="card-body text-center position-absolute top-50 start-50 translate-middle text-white">
                            <h5 className="card-title fs-1">Programming</h5>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/quiz" className="card text-decoration-none">
                        <HoveredImage src={Image4} alt="Quiz DevOps" className="card-img-top image-opacity" onClick={() => setSelectedQuiz("Cloud")} />
                        <div className="card-body text-center position-absolute top-50 start-50 translate-middle text-white">
                            <h5 className="card-title fs-1">Cloud</h5>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/quiz" className="card text-decoration-none">
                        <HoveredImage src={Image5} alt="Quiz DevOps" className="card-img-top image-opacity" onClick={() => setSelectedQuiz("Docker")} />
                        <div className="card-body text-center position-absolute top-50 start-50 translate-middle text-white">
                            <h5 className="card-title fs-1">Docker</h5>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/quiz" className="card text-decoration-none">
                        <HoveredImage src={Image6} alt="Quiz DevOps" className="card-img-top image-opacity" onClick={() => setSelectedQuiz("Kubernetes")} />
                        <div className="card-body text-center position-absolute top-50 start-50 translate-middle text-white">
                            <h5 className="card-title fs-1">Kubernetes</h5>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/quiz" className="card text-decoration-none">
                        <HoveredImage src={Image7} alt="Quiz DevOps" className="card-img-top image-opacity" onClick={() => setSelectedQuiz("")} />
                        <div className="card-body text-center position-absolute top-50 start-50 translate-middle text-white">
                            <h5 className="card-title fs-1">Random</h5>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/quiz" className="card text-decoration-none">
                        <HoveredImage src={Image8} alt="Quiz DevOps" className="card-img-top image-opacity" onClick={() => setSelectedQuiz("DevOps")} />
                        <div className="card-body text-center position-absolute top-50 start-50 translate-middle text-white">
                            <h5 className="card-title fs-1">DevOps</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage