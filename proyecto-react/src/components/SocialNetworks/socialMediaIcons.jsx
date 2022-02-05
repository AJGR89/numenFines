import React from 'react';
import socialMediaList from './socialMedia/';

export const socialmediaicons = (icons) => {
  return <div>
            {socialMediaList.map((iconos, index) => (
                <div key={index}>
                    <ul>
                        <li> <img src="{iconos.icon}" alt="{iconos.alt}" className="src" /> <a href="{iconos.link}"> </a> </li>
                    </ul>
                </div>
            ))}
        </div>;
};

export default socialmediaicons; 