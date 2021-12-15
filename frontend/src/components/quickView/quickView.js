import React from "react";
// import ReactDOM from "react-dom";
import "./quickView.css";
import "../../index.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function QuickView() {
  return (
    <div>
      <div className="Heading">
        <div className="ActionItemContainer">
          <h1 className="primary-font">Action Items</h1>
          <h4 className="primary-font">Lorem Ipsum Dotor</h4>
          <div>
            <Splide
              options={{
                type: "loop",
                pagination: false,
                // height: "50vh",
                // speed: '0',
                autoplay: false,
                // interval: '0',
              }}
            >
              <SplideSlide>
                <div>
                  <div className="Stuff">
                    <span>Task 1</span>
                    <span>Very Important</span>
                  </div>
                  <div className="Stufff">
                    <button>button</button>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide></SplideSlide>
            </Splide>
          </div>
        </div>
        
        <div className="ComingUpContainer">
          <h1 className="primary-font">Coming Up</h1>
          <h4 className="primary-font">Lorem Ipsum Dotor</h4>
          <div>
            <Splide
              options={{
                type: "loop",
                pagination: false,
                // height: "50vh",
                // speed: '0',
                autoplay: false,
                // interval: '0',
              }}
            >
              <SplideSlide>
                <div>
                  <div className="Stuff">
                    <span>Task 1</span>
                    <span>Very Important</span>
                  </div>
                  <div className="Stufff">
                    <button>button</button>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide></SplideSlide>
            </Splide>
          </div>
        </div>
        
        <div className="LastNPostContainer">
          <h1 className="primary-font">Last 'N' Posts</h1>
          <h4 className="primary-font">Lorem Ipsum Dotor</h4>
          <div>
            <Splide
              options={{
                type: "loop",
                pagination: false,
                // height: "50vh",
                // speed: '0',
                autoplay: false,
                // interval: '0',
              }}
            >
              <SplideSlide>
                <div>
                  <div className="Stuff">
                    <span>Task 1</span>
                    <span>Very Important</span>
                  </div>
                  <div className="Stufff">
                    <button>button</button>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide></SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickView;
