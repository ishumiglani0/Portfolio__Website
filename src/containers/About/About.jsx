import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap,MotionWrap } from '../../wrapper';
import './About.scss';
import client,{ urlFor } from '../../client';

// import {images} from '../../constants'
// const abouts =[
//   {title:'Web Development', description:'I am a good Web Devloper',imageUrl:images.about01},
//   {title:'Software Development', description:'I am a good Software Devloper',imageUrl:images.about02},
//   {title:'.Net Development', description:'I am a good DotNet Devloper',imageUrl:images.about03},
//   {title:'MERN Stack Development', description:'I am a good MERN Satck Devloper',imageUrl:images.about04}
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    }).catch(err=>{
      console.log(err)
    });
  }, []);

  return (
    <>
      {/* <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2> */}
      <motion.h2
            whileInView={{ x:[-400,0],opacity: 1 }}
            whileHover={{ scaleY:1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="head-text">
      As a <span>passionate developer</span>, I embark on a journey to turn <span>ideas</span> into <span>reality</span> <br /> Join me in <span>crafting the future together</span>
      </motion.h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{scale:[0,1],opacity: 1 }}
            whileHover={{ rotateY: 360}}
            transition={{ duration: 1, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
// export default About
export default AppWrap(
  // About,
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);