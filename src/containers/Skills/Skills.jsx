import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'

import { AppWrap,MotionWrap} from '../../wrapper';
import client,{ urlFor } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const dir = [{x:[300,0]},{x:[-300,0]}];
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  let temp=0;
  let temp_obj={}

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill,index) => {
            temp = Math.floor((Math.random()*2));
            temp_obj = dir[temp];
            return <motion.div
              
              whileInView={temp_obj}
              transition={{ delay:0.1,duration:0.1,ease:"easeOut" }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
            })}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience,oindex) => (
            <motion.div
              className="app__skills-exp-item"
              key={oindex}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work,iindex) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.desc}
                      key={`${oindex}-${iindex}`}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    />          
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

    </>
  );
};

export default AppWrap(
  // Skills,
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);