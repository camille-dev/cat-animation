import React, { Component } from 'react';
import './App.css';

/* Return a random number between min included and max excluded */
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      fill_open: "#000000",
      fill_blink: "none",
      bgColors: ["#EE6055", "#60D394", "#AAF683", "#FF9B85", "#FFD97D"],
      imgColors: ["#60D394", "#AAF683", "#FF9B85", "#FFD97D", "#EE6055" ],
      randChoiceColor: getRandomNumber(0, 5),
      tiltOptions: ["No-Tilt", "Tilt-Right", "Tilt-Left"],
      classTilt: "App-header",
      hover: false,
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.blinkEyes(),
      3000
    );
    this.intervalID2 = setInterval(
      () => this.tiltHead(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    clearInterval(this.intervalID2);
  }

  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  blinkEyes() {
    this.setState(
      {...this.state,
        fill_open:  "none",
        fill_blink: "#000000"
      },
            () => {
                setTimeout(()=>{this.setState({...this.state,
                  fill_open:  "#000000",
                  fill_blink: "none"
                })}, 200)
            }
        );
  }

  tiltHead() {
    this.setState(
      {...this.state,
        classTilt: "App-header " + this.state.tiltOptions[getRandomNumber(0, 3)],
      });
  }

  toggleHover() {
	   this.setState(
       {...this.state,
       hover: !this.state.hover,
     });
  }


  render() {

  document.body.style = 'background:' + this.state.bgColors[this.state.randChoiceColor];


    return (
      <div className="App">
        <div className={this.state.classTilt}>
          <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 400">
          {/*head*/}
          <g className="Head">
          <ellipse ry="49.5" rx="71" id="svg_1" cy="117.937498" cx="324.499994"  fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <path id="svg_3" d="m241.879312,78.437498" opacity="0.5" stroke="null" fill={this.state.imgColors[this.state.randChoiceColor]} />
          <path id="svg_4" d="m260.499994,104.437498l-21.5,-56.4375" opacity="0.5" stroke="null" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <path transform="rotate(-160.5352783203125 275.88568115234375,90.78089904785159) " stroke="null" id="svg_5" d="m250.142854,113.437498l-13.14286,-57.4375c0.37551,0.48853 52.94693,13.88829 52.94693,13.88829c0,0 76.81632,86.91738 -39.80407,43.54921z"  fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <path transform="rotate(-93.49967193603516 362.1270751953125,83.95330810546875) " stroke="null" id="svg_6" d="m336.384233,106.609913l-13.14286,-57.4375c0.37551,0.48853 52.94693,13.88829 52.94693,13.88829c0,0 76.81632,86.91738 -39.80407,43.54921z" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <rect stroke="null" id="svg_22" height="2.758601" width="35.862069" y="127.887895" x="236.896557" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <rect transform="rotate(-15.041440963745117 257.58621215820284,137.5430603027344) " stroke="null" id="svg_25" height="2.758601" width="35.862069" y="136.163755" x="239.655179" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <rect stroke="null" transform="rotate(9.637473106384277 254.82757568359358,118.92237854003899) " id="svg_26" height="2.758601" width="35.862069" y="117.543065" x="236.896562" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <rect stroke="null" id="svg_27" height="2.758601" width="35.862069" y="126.50858" x="375.517255" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <rect stroke="null" transform="rotate(15.041438102722168 389.99356079101545,135.1533508300781) " id="svg_28" height="2.758601" width="38.705155" y="133.774047" x="370.640968" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <rect transform="rotate(-14.03618335723877 394.827606201172,118.23271179199217) " stroke="null" id="svg_29" height="2.758601" width="35.862069" y="116.85341" x="376.896554" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <path transform="rotate(-39.316429138183594 322.5646057128907,131.65618896484378) " stroke="null" id="svg_13" d="m323.775142,130.047632c13.88073,11.32138 -4.51336,5.71079 -4.51336,5.71079c0,0 -9.36736,-17.03218 4.51336,-5.71079z" fill="#000000"/>
          <line id="svg_14" y2="145.818962" x2="322.413796" y1="140.301721" x1="322.413796" stroke="null" fill="none"/>
          <rect stroke="null" id="svg_19" height="9.657221" width="2.070783" y="131.344725" x="321.134386" fill="#000000"/>
          </g>

          {/*opened eyes*/}
          <g className="Head">
          <ellipse ry="7.241379" rx="3.448276" id="svg_9" cy="115.81896" cx="298.275865"  fill={this.state.fill_open}/>
          <ellipse ry="7.241379" rx="3.448276" id="svg_10" cy="115.81896" cx="347.241383" fill={this.state.fill_open}/>
          </g>

          {/*blinked eyes*/}
          <g className="Head">
          <rect stroke="null" transform="rotate(25.207103729248047 298.3944702148437,115.56700897216794) " id="svg_54" height="2.720685" width="13.299494" y="114.20667" x="291.74472" fill={this.state.fill_blink}/>
          <rect stroke="null" transform="rotate(-28.130123138427734 347.53436279296875,116.06684112548834) " id="svg_55" height="3.023069" width="12.845234" y="114.555312" x="341.111755" fill={this.state.fill_blink}/>
          </g>

          <g className="Body">
          <ellipse stroke="null" transform="rotate(13.495366096496582 343.3470764160152,208.19461059570315) " ry="59.779346" rx="90.335823" id="svg_30" cy="208.194611" cx="343.347066" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <rect stroke="null" id="svg_33" height="74.482759" width="23.448271" y="195.474132" x="254.827587" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <ellipse stroke="null" ry="11.724138" rx="11.724138" id="svg_36" cy="267.887926" cx="266.551723" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <rect transform="rotate(86.55117797851562 376.2068786621094,268.2327575683594) " stroke="null" id="svg_41" height="36.551716" width="23.448271" y="249.956892" x="364.482757"   fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <ellipse stroke="null" ry="11.724138" rx="11.724138" id="svg_42" cy="269.267237" cx="359.655169" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <ellipse stroke="null" transform="rotate(-28.42214012145996 399.4848327636718,256.5685424804687) " ry="19.655172" rx="31.870021" id="svg_43" cy="256.56853" cx="399.484825"   fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <rect stroke="null" id="svg_46" height="36.551716" width="23.448271" y="233.40516" x="289.999993"   fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <ellipse stroke="null" ry="11.724138" rx="11.724138" id="svg_47" cy="267.887918" cx="301.724129"   fill={this.state.imgColors[this.state.randChoiceColor]}/>
          <path transform="rotate(27.284788131713867 451.35855102539034,243.27014160156256) " id="svg_50" d="m516.206895,232.715513c7.586207,31.724138 -129.655172,30.344827 -130,30.043103c0.344828,0.301724 122.413793,-61.767241 130,-30.043103z" stroke="null" fill={this.state.imgColors[this.state.randChoiceColor]}/>
          </g>
          </svg>
        </div>
      </div>
    );
  }

}

export default App;
