import{SiEquinixmetal}from'react-icons/si'
import{BiSolidUpArrow}from'react-icons/bi'
import{BsFillBoxSeamFill}from'react-icons/bs'
import{FaEarthAmericas}from'react-icons/fa6'

function Footer() {
  return (
    <>
       <footer>
            <div className="fcontainer">
                <h2><FaEarthAmericas/><p>prologis</p></h2>
                <h2><BiSolidUpArrow/><p>american tower</p></h2>
                <h2><SiEquinixmetal/><p>equinix</p></h2>
                <h2><BsFillBoxSeamFill/><p>digital realty </p></h2>
            </div>
            
       </footer>
    </>
  );
}

export default Footer;
