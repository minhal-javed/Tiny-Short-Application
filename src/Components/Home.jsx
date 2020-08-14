import React from "react";
import code from '../assests/images/code.png';
import pic from '../assests/images/house.jpg'
import useWebAnimations from "@wellyshen/use-web-animations";


export const Home = ()=>{
    

    const pc = useWebAnimations({
      keyframes: [
        { transform: "translateX(50%)" },
       
        { transform: "translateX(0%)" },

       
      ],
      timing: {
        easing: "ease-in-out",
        direction: "alternate",
        playbackRate: 2,
        duration: 5000,
        iterations: Infinity,
      },
    });

    const software = useWebAnimations({
      keyframes: [
        { transform: "translateX(8%)" },

        { transform: "translateX(0%)" },
      ],
      timing: {
        easing: "ease-in-out",
        direction: "alternate",
        playbackRate: 2,
        duration: 4000,
        iterations: Infinity,
      },
    });



    return (
      <div>
        <div className="" id="header">
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>Grow Your Business</h1>
                    <h2 className="my-3">
                      We are Team of Professional and Dedicated Developers
                    </h2>
                  </div>

                  <div className="col-lg-6 order-2 order-lg-1">
                    <img
                      src={code}
                      ref={pc.ref}
                      alt={code}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto mt-5">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                    <p style={{fontSize:'23px'}}>
                      <strong> TechHub</strong> deals with blockchains, a topic
                      that can be a little bit intimidating for
                      technically-challenged people. Here, short animation is
                      used to lighten things up, support the tagline in the hero
                      area, and bridge the gap between the service and regular
                      users. Paired with numerous fancy illustrations that are
                      scattered throughout the website, it turns complex
                      concepts into simple ones. This makes the project closer
                      to its audience.
                    </p>
                  </div>

                  <div className="col-lg-6 order-2 order-lg-1">
                    <img src={pic} ref={software.ref} alt='pic' className="img-fluid" style={{width:'80%'}}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


