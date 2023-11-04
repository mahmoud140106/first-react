import{SiEquinixmetal}from'react-icons/si'
import{BiSolidUpArrow}from'react-icons/bi'
import{BsFillBoxSeamFill}from'react-icons/bs'
import{FaEarthAmericas}from'react-icons/fa6'

function Icons() {
  return (
    <>
       <footer>
            <div className="icons-container">
                <h3><FaEarthAmericas/><p>prologis</p></h3>
                <h3><BiSolidUpArrow/><p>american tower</p></h3>
                <h3><SiEquinixmetal/><p>equinix</p></h3>
                <h3><BsFillBoxSeamFill/><p>digital realty</p></h3>
            </div>
       </footer>
    </>
  );
}

export default Icons;
