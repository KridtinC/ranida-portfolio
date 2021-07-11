import b1 from '../assets/branding/b1.png'
import b2 from '../assets/branding/b2.png'
import b3 from '../assets/branding/b3.png'
import bgrey from '../assets/decorations/bgrey.png'
import bdarkgrey from '../assets/decorations/bdarkgrey.png'

import ldd1 from '../assets/branding/ldd/ldd1.png'
import ldd2 from '../assets/branding/ldd/ldd2.png'
import ldd3 from '../assets/branding/ldd/ldd3.png'

import ttime1 from '../assets/branding/ttime/ttime1.png'
import ttime2 from '../assets/branding/ttime/ttime2.png'
import ttime3 from '../assets/branding/ttime/ttime3.png'

import agnostic1 from '../assets/branding/agnostic/agnostic1.png'
import agnostic2 from '../assets/branding/agnostic/agnostic2.png'
import agnostic3 from '../assets/branding/agnostic/agnostic3.png'

import { WorkDetailProps } from '../pages/work-detail/WorkDetail'

const lddImgSources: string[] = [ldd1, ldd2, ldd3]
const ttimeImgSources: string[] = [ttime1, ttime2, ttime3]
const agnosticImgSources: string[] = [agnostic1, agnostic2, agnostic3]

const LDDData: WorkDetailProps = {
    url: "/line-doo-duong",
    coverImgURL: b1,
    imgSources: lddImgSources,
    workName: 'LINE ดูดวง',
    role: 'Art Director',
}

const TTimeData: WorkDetailProps = {
    url: "/t-time",
    coverImgURL: b2,
    imgSources: ttimeImgSources,
    workName: 'T-Time Dimsum',
    role: 'Graphic Designer',
}

const AgnosticData: WorkDetailProps = {
    url: "/agnostic",
    coverImgURL: b3,
    imgSources: agnosticImgSources,
    workName: 'Agnostic',
    role: 'Graphic Designer',
}

const BlankGreyData: WorkDetailProps = {
    url: "/",
    coverImgURL: bgrey,
}

const BlankDGreyData: WorkDetailProps = {
    url: "/",
    coverImgURL: bdarkgrey,
}

export {
    LDDData,
    TTimeData,
    AgnosticData,
    BlankGreyData,
    BlankDGreyData,
    lddImgSources
}