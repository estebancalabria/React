import "bootstrap/dist/css/bootstrap.css";

//sfc
const Cabecera = ({ titulo }) => {
    return (
        <>
            <header className="text-center bg-success text-light">
                <h1 className="display-2 mb-0 pt-2">{titulo}</h1>
            </header>
            <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320" 
                width="100%" 
                height="100px"
                preserveAspectRatio="none">
                <path fill="#198754" fill-opacity="1" d="M0,160L26.7,160C53.3,160,107,160,160,165.3C213.3,171,267,181,320,170.7C373.3,160,427,128,480,96C533.3,64,587,32,640,53.3C693.3,75,747,149,800,165.3C853.3,181,907,139,960,122.7C1013.3,107,1067,117,1120,144C1173.3,171,1227,213,1280,218.7C1333.3,224,1387,192,1413,176L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
            </svg>
        </>);
}

export default Cabecera;