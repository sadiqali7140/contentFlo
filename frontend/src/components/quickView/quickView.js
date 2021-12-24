import React from "react";
// import ReactDOM from "react-dom";
import "./quickView.css";
import "../../index.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import PostCard from "../postCard/postCard";

export default function QuickView() {
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
                height: "50%",
                // speed: '1',
                autoplay: false,
                // interval: '0',
              }}
            >
              <SplideSlide>
                <div className="Slider">
                  <PostCard id="61c4b0064e0088fc92e4ab63"/>
                  {/* <div className="Stuff">
                    <span>Task 1</span>
                    <span>Very Important</span>
                  </div> */}
                  <div className="Stufff">
                    <button>button</button>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
              <div className="Slider">
                  <PostCard id="61c5ba996ec074768463ba76"/>
                  {/* <div className="Stuff">
                    <span>Task 1</span>
                    <span>Very Important</span>
                  </div> */}
                  <div className="Stufff">
                    <button>button</button>
                  </div>
                </div>
              </SplideSlide>
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
                height: "50%",
                // speed: '0',
                autoplay: false,
                // interval: '0',
              }}
            >
              <SplideSlide>
                <div>
                  <PostCard id="61c4fae4468a1941c5f548a1"/>
                  {/* <div className="Stuff">
                    <span>Task 1</span>
                    <span>Very Important</span>
                  </div> */}
                  <div className="Stufff">
                    <button>button</button>
                  </div>
                </div>
              </SplideSlide>
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
                height: "50%",
                // speed: '0',
                autoplay: false,
                // interval: '0',
              }}
            >
              <SplideSlide>
                <div>
                  <PostCard id="61c4c555fa23f757e157c8d0"/>
                  {/* <div className="Stuff">
                    <span>Task 1</span>
                    <span>Very Important</span>
                  </div> */}
                  <div className="Stufff">
                    <button>button</button>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}