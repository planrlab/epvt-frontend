import React from 'react';

import { SiGooglescholar, SiLinkedin } from 'react-icons/si';
import { FaGithub, FaGlobe } from 'react-icons/fa';

import './index.css';

const Component = ({ name, projectRole, photo, social }) => {
    return (
        <div className="col-4">
            <div className="member-card row">
                <div className="member-card-photo col-5">
                    <img src={photo} alt={name} />
                </div>
                <div className="member-card-name col-7">
                    <h4>{name}</h4>
                    <h6>{projectRole}</h6>
                    <div className="member-card-social row">
                        <div className="col-3">
                            <a target="blank" href={social.website}>
                                <FaGlobe />
                            </a>
                        </div>
                        <div className="col-3">
                            <a target="blank" href={social.github}>
                                <FaGithub />
                            </a>
                        </div>
                        <div className="col-3">
                            <a target="blank" href={social.linkedin}>
                                <SiLinkedin />
                            </a>
                        </div>
                        <div className="col-3">
                            <a target="blank" href={social.scholar}>
                                <SiGooglescholar />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component;
