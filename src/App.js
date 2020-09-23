import React from "react";
import  "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
<>
<div className="container">
<div className="header">
  <img src={process.env.PUBLIC_URL+"/images/logo.png"} alt="hello" className="mx-auto d-block img-fluid" height="200px" width="200px" />
</div>
<div className="row">
<div className="col-md-4">
<img src={process.env.PUBLIC_URL+"/images/1.png"} alt="mypic" width="450px" height="100px" className="img-fluid" />
</div>
<div className="col-md-8">
<p className="font-weight-bold">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time. </p>
<ul>
  <li className="font-weight-bold">C.R.I's energy efficient products are well recognized by various Government institutions,
  as trustworthy products for various projects across the globe to save energy.</li>
  <li className="font-weight-bold">C.R.I.is the highest contributor in the country for the projects of EESL(Energy Efficiency Services Limited)
  to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with Iot enabled control panel.</li>
</ul>
<img src={process.env.PUBLIC_URL+"/images/2.png"} alt="mypic" width="600px"  className="img-fluid" />
<p className="font-weight-bolder">Government of India has awarded the <b>National Energy Conservation Award 2018"</b> Mr.G. selvaraj,Joint Managing Director of C.R.I Group received the award from Smt.Sumitra Mahajan,
 Speaker of Look Sabha & Shri. Raj Kumar Singh,Honorable Minister of state.</p>
</div>
</div>
<p className="font-weight-bold mt-4 text-center">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
<div>
  <img src={process.env.PUBLIC_URL+"/images/3.png"} alt="mypic" width="1000px" height="300px" className="img-fluid" />
  <p className="text-center font-weight-bold">Valves-Pumps-Pipes-IoT Drives & Controllers-Wires & Cables-Solar Systems-Motors </p>
</div>
<hr className="style-one"></hr>

<div>
  <p className="text-center text-capitalize font-weight-bold mt-3">c.r.i fluid systems products cater to diverse segments</p>
  <p className="text-capitalize text-center font-weight-bold">chemicals & process|power|water & waste water|oils & gas|pharma|sugars & distieries|paper & pulp|marin & defence|metal &mining|food &beverage|petrochemical &refineries|solar|building|hvac|fire fighting|agriculture & residential</p>
</div>
  <div className="jumbotron bg-danger">
  <div className="row pt-4 responsive">
  <div className="col-sm-4">
  <p className="text-white text-center responsive"> <span class="glyphicon glyphicon-earephone bg-white"></span>Toll free 1800 200 1234</p>
  </div>
  <div className="col-sm-4">
  <p className="text-white text-center"><span class="glyphicon glyphicon-facebook bg-white"></span>www.facebook.com/cripumps</p>
  </div>
  <div className="col-sm-4 responsive">
  <p className="text-white text-center"><span class="glyphicon glyphicon-globe bg-white"></span>www.crigroups.com</p>
  </div>
  </div>
    </div>
    </div>
</>
  );
}

export default App;
