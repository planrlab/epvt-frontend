import React from 'react';

import './index.css';

import MemberCard from '../../components/member-card';

const Component = () => {
    return (
        <div className="team-container row">
            <h3>Project Contributors</h3>
            <MemberCard
                name="Raju Halder"
                projectRole="Project Supervisor"
                photo="/static/img/halder.jpg"
                social={{
                    website: 'https://iitp.ac.in/~halder/',
                    github: 'https://github.com/RajuHalder/',
                    linkedin: '',
                    scholar: 'https://scholar.google.com/citations?user=mA0HQJEAAAAJ&hl=en'
                }}
            />
            <MemberCard
                name="Akshay M. Fajge"
                projectRole="Toolchain and Backend Developer"
                photo="/static/img/akshay.jpg"
                social={{
                    website: '',
                    github: '',
                    linkedin: '',
                    scholar: 'https://scholar.google.com/citations?user=Neuj3C4AAAAJ&hl=en'
                }}
            />
            <MemberCard
                name="Arnab Mukherjee"
                projectRole="Full Stack Developer"
                photo="https://raw.githubusercontent.com/mukherjeearnab/mukherjeearnab.github.io/static/img/profile.jpg"
                social={{
                    website: 'https://mukherjeearnab.github.io/',
                    github: 'https://github.com/mukherjeearnab',
                    linkedin: 'https://www.linkedin.com/in/arnabm99',
                    scholar: 'https://scholar.google.com/citations?user=bvqBMKgAAAAJ&hl=en'
                }}
            />
            <MemberCard
                name="Priyambada"
                projectRole="Frontend Dev. Intern"
                photo="/static/img/priyambada.jpg"
                social={{
                    website: '',
                    github: 'https://github.com/itspriya21',
                    linkedin: 'https://www.linkedin.com/in/priya-vatsh-ba456b217/',
                    scholar: ''
                }}
            />
            <MemberCard
                name="Tausif"
                projectRole="Tool Contributor"
                photo="/static/img/tausif.jpg"
                social={{
                    website: '',
                    github: '',
                    linkedin: '',
                    scholar: ''
                }}
            />
        </div>
    );
};

export default Component;
