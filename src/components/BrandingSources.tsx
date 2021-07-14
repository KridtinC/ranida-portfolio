import b1 from '../assets/branding/b1.png'
import b2 from '../assets/branding/b2.png'
import b3 from '../assets/branding/b3.png'
import b4 from '../assets/branding/b4.png'
import b5 from '../assets/branding/b5.png'
import b6 from '../assets/branding/b6.png'
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

import bbb1 from '../assets/branding/book-blind-date/book-blind-date1.png'
import bbb2 from '../assets/branding/book-blind-date/book-blind-date2.png'
import bbb3 from '../assets/branding/book-blind-date/book-blind-date3.png'

import acoc1 from '../assets/branding/a-cup-of-chiangrai/a-cup-of-chiangrai1.png'
import acoc2 from '../assets/branding/a-cup-of-chiangrai/a-cup-of-chiangrai2.png'
import acoc3 from '../assets/branding/a-cup-of-chiangrai/a-cup-of-chiangrai3.png'

import haroon1 from '../assets/branding/haroon/haroon1.png'
import haroon2 from '../assets/branding/haroon/haroon2.png'
import haroon3 from '../assets/branding/haroon/haroon3.png'

import { WorkDetailProps } from '../pages/work-detail/WorkDetail'

const lddImgSources: string[] = [ldd1, ldd2, ldd3]
const ttimeImgSources: string[] = [ttime1, ttime2, ttime3]
const agnosticImgSources: string[] = [agnostic1, agnostic2, agnostic3]
const bbbImgSources: string[] = [bbb1, bbb2, bbb3]
const acocImgSources: string[] = [acoc1, acoc2, acoc3]
const haroonImgSources: string[] = [haroon1, haroon2, haroon3]

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

const BookBlindDateData: WorkDetailProps = {
    url: "/book-blind-date",
    coverImgURL: b4,
    imgSources: bbbImgSources,
    workName: 'Book Blind Date',
}

const ACupOfChaingRaiData: WorkDetailProps = {
    url: "/a-cup-of-chiangrai",
    coverImgURL: b5,
    imgSources: acocImgSources,
    workName: 'A Cup of Chiang Rai',
}

const HaroonData: WorkDetailProps = {
    url: "/haroon",
    coverImgURL: b6,
    imgSources: haroonImgSources,
    workName: 'Haroon',
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
    BookBlindDateData,
    ACupOfChaingRaiData,
    HaroonData,
    BlankGreyData,
    BlankDGreyData,
    lddImgSources
}