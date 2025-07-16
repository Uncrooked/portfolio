//fonts
import { Montserrat, Imperial_Script } from 'next/font/google';

const montserrat = Montserrat({subsets:['latin']});
const imperial = Imperial_Script({subsets:['latin'],weight:"400"});

export const fonts = {
  "montserrat":montserrat,
  "imperial":imperial
};