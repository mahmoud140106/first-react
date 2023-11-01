
import CountUp from 'react-countup';
import Slides from './slides';
import Counterfetch from './counterfetch';

function Home() {

  return (
    <>
        <section>
            <div className="home" id="home">
            <div className="left">
                    <div className="content">
                      <div className="con">
                      <h3>Discover most suitble property</h3>
                      <p>find a variety of properties that suit you very easily forget all difficulties in finding aresidience for you</p>
                      </div>
                        <div className="search">
                          <i className="fa-solid fa-location-arrow"></i>
                          <input type="search"></input>
                          <button className="mybtn">search</button>
                        </div> 
                        <div className="nums">
                            <div className="box">
                              <h4 className="num"><CountUp start={8800} end={9000}/> <span className='plus'>+</span></h4>
                              <p>premium products</p>
                            </div>
                            <div className="box">
                              <h4 className="num"><CountUp start={1800} end={2000}/> <span className='plus'>+</span></h4>
                              <p>happy customers</p>
                            </div>
                            <div className="box">
                              <h4 className="num"><CountUp start={0} end={28}/> <span className='plus'>+</span></h4>
                              <p>award winnings</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                <img src="./img/home1.jpg" alt=""/>
                </div>
            </div>
        </section>
        <Slides/>
        <Counterfetch/>
    </>
  );
}

export default Home;
