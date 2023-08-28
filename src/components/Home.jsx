import React from 'react';
import vg from "../assets/—Pngtree—flat wind in the discussion_4594811.png";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Developer.</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>we are your one only solution to the tech problems you face everyday. we are leading tech company whose aim is to increase the ability in chidren</p>
        </div>

    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>“People tend to think of the web as a way to get information or perhaps as a place to carry out ecommerce. But really, the web is about accessing applications. Think of each website as an application, and every single click, every single interaction with that site, is an opportunity to be on the very latest version of that application.”</p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay: "0.3s",}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style={{animationDelay: "0.5s",}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style={{animationDelay: "0.7s",}}>
                    <AiFillYoutube />
                    <p>YouTube</p>
                </div>

                <div style={{animationDelay: "0.1s",}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home;