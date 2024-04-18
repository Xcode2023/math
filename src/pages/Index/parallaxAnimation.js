

import  Parallax from 'parallax-js'
export const parallaxAnimation=(parallax1)=>{
    const parallaxInstance = new Parallax(parallax1, {
        relativeInput: true,
      });
      parallaxInstance.friction(0.2, 0.2);
    
}