import React from 'react';
import css from './skills.module.css'
import {
  FaCss3Alt,
  FaNodeJs,
  FaJsSquare,
  FaReact,
  FaBootstrap,
} from 'react-icons/fa';

const Skills = () => {
  return (
    <div>
      <h3>Skills</h3>
      <div>
        <span><FaCss3Alt size="3em" title="CSS" /></span>
        <span><FaBootstrap size="3em" title="Bootstrap" /></span>
      </div>
      <div>
        <span><FaJsSquare size="3em" title="JavaScript"/></span> 
        <span><FaReact size="3em" title="React.js" /></span>
        <span><FaNodeJs size="3em" title="node.js" /></span>
      </div>
    </div>
  );
};

export default Skills;
