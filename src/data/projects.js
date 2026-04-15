import rend1_1 from '../assets/fotos trade/1adi-rend.jpg';
import rend1_2 from '../assets/fotos trade/1adi-rend2.jpg';
import rend1_3 from '../assets/fotos trade/1adi-rend3.jpg';

import rend2_1 from '../assets/fotos trade/2adi-rend.jpg';
import rend2_2 from '../assets/fotos trade/2adi-rend2.jpg';
import rend2_3 from '../assets/fotos trade/2adi.rend3.jpg';

import rend3_1 from '../assets/fotos trade/3adi-rend.JPG';
import rend3_2 from '../assets/fotos trade/3adi-rend2.JPG';
import rend3_3 from '../assets/fotos trade/3adi-rend3.JPG';
import { resolveProjectsImages } from './projectImageResolver';

export const projects = resolveProjectsImages([
  {
    id: '01',
    slug: 'mega-ride',
    images: [rend1_1, rend1_2, rend1_3],
    client: 'MEGA RIDE',
    type: 'Montaje & Señalética',
    challenge: 'Estandarizar la imagen visual en 12 locales con superficies y proporciones distintas.',
    solution: 'Sistema modular de señalética adaptable con materiales unificados.',
    result: 'Coherencia de marca en toda la cadena, reduciendo costos de reposición en un 30%.',
  },
  {
    id: '02',
    slug: 'anthony-edwards',
    images: [rend2_1, rend2_2, rend2_3],
    client: 'ANTHONY EDWARDS 2',
    type: 'Montaje & Señalética',
    challenge: 'Comunicar una identidad premium en espacios de alta rotación gastronómica.',
    solution: 'Diseño e instalación de elementos de branding de alta durabilidad y fácil mantenimiento.',
    result: 'Aumento del tiempo de permanencia promedio en el local y mejora en percepción de marca.',
  },
  {
    id: '03',
    slug: 'superstar',
    images: [rend3_3, rend3_1, rend3_2],
    client: 'SUPERSTAR',
    type: 'Comunicación Visual',
    challenge: 'Diferenciarse en un mercado saturado con una propuesta visual de alto impacto.',
    solution: 'Cartelería exterior de gran formato con materiales resistentes y gráfica impactante.',
    result: 'Reconocimiento de marca incrementado en el área de influencia del proyecto.',
  },
]);
