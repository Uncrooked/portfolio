//fonts
import { Montserrat, Orbitron } from 'next/font/google';

const montserrat = Montserrat({subsets:['latin']});
const orbitron = Orbitron({subsets:['latin']});

export const fonts = {
  "montserrat":montserrat,
  "orbitron":orbitron
};