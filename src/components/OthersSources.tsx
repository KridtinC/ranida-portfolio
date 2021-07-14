import o1 from '../assets/others/o1.png'
import o2 from '../assets/others/o2.png'
import o3 from '../assets/others/o3.png'
import o4 from '../assets/others/o4.png'

import co1 from '../assets/others/calm-outdoors/calm-outdoors1.png'
import co2 from '../assets/others/calm-outdoors/calm-outdoors2.png'

import alois1 from '../assets/others/alois/alois1.png'
import alois2 from '../assets/others/alois/alois2.png'
import alois3 from '../assets/others/alois/alois3.png'

import dino1 from '../assets/others/dino-clamp/dino-clamp1.png'
import dino2 from '../assets/others/dino-clamp/dino-clamp2.png'
import dino3 from '../assets/others/dino-clamp/dino-clamp3.png'

import maelieb1 from '../assets/others/maelieb/maelieb1.png'
import maelieb2 from '../assets/others/maelieb/maelieb2.png'

import { WorkDetailProps } from '../pages/work-detail/WorkDetail'

const calmImgSources: string[] = [co1, co2]
const aloisImgSources: string[] = [alois1, alois2, alois3]
const dinoImgSources: string[] = [dino1, dino2, dino3]
const maeliebImgSources: string[] = [maelieb1, maelieb2]

const CalmData: WorkDetailProps = {
    url: "/calm-outdoors",
    coverImgURL: o1,
    imgSources: calmImgSources,
    workName: 'Calm Outdoors',
}

const AloisData: WorkDetailProps = {
    url: "/alois",
    coverImgURL: o2,
    imgSources: aloisImgSources,
    workName: 'Alois',
}

const DinoData: WorkDetailProps = {
    url: "/dino-clamp",
    coverImgURL: o3,
    imgSources: dinoImgSources,
    workName: 'Dino Clamp',
}

const MaeliebData: WorkDetailProps = {
    url: "/maelieb",
    coverImgURL: o4,
    imgSources: maeliebImgSources,
    workName: 'Maelieb',
}

export {
    CalmData,
    AloisData,
    DinoData,
    MaeliebData
}