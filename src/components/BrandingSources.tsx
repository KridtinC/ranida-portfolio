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

import { Role, WorkDetailProps } from '../pages/work-detail/WorkDetail'

const lddImgSources: string[] = [ldd1, ldd2, ldd3]
const ttimeImgSources: string[] = [ttime1, ttime2, ttime3]
const agnosticImgSources: string[] = [agnostic1, agnostic2, agnostic3]
const bbbImgSources: string[] = [bbb1, bbb2, bbb3]
const acocImgSources: string[] = [acoc1, acoc2, acoc3]
const haroonImgSources: string[] = [haroon1, haroon2, haroon3]

const LDDData: WorkDetailProps = {
    url: "/line-horoscope",
    coverImgURL: b1,
    imgSources: lddImgSources,
    workName: `LINE HOROSCOPE\n\
    COPERATE IDENTITY`,
    role: Role.ArtDirector,
    description: 'This re-branding project comes with new characters of LINE ดูดวง.  “The Movement of The Star” is the key concept of this project, so the color palette imitates northern light. '
}

const TTimeData: WorkDetailProps = {
    url: "/t-time",
    coverImgURL: b2,
    imgSources: ttimeImgSources,
    workName: `T-TIME DIMSUM\n\
    CORPERATE IDENTITY`,
    role: Role.GraphicDesigner,
    description: 'There are Corporate Identity, mascot, packaging, and menu  for T-Time Dimsum, a dim sum franchise.  The design comes with Lion Mascot which has Botan, or Peony flower, on top of its head. The flower means good fortune, riches, honor, and compassion.'
}

const AgnosticData: WorkDetailProps = {
    url: "/agnostic",
    coverImgURL: b3,
    imgSources: agnosticImgSources,
    workName: 'AGNOSTIC FUND',
    role: Role.ArtDirector,
    description: 'In the concept of “The Connector”, being a center networking for businesses, we designed corporate identity, stationery, and UX/UI for Agnostic fund.'
}

const BookBlindDateData: WorkDetailProps = {
    url: "/book-blind-date",
    coverImgURL: b4,
    imgSources: bbbImgSources,
    workName: 'BOOK BLIND DATE',
    role: Role.ArtDirector,
    description: 'The festival about blind dates with books before: books wrapped in brown paper with a few keywords or a review on the outside to indicate what kind of surprise the reader might be in for. There is coperate identity for the festival!'
}

const ACupOfChaingRaiData: WorkDetailProps = {
    url: "/a-cup-of-chiangrai",
    coverImgURL: b5,
    imgSources: acocImgSources,
    workName: 'A CUP OF CHIANGRAI',
    role: Role.ArtDirector,
    description: '‘A cup of Chiangrai’ came from 2 keyword, delicious and northen Thailand. Delicious food is the product of delicate work. That is why I selected using paper-cut to be the art direction.'
}

const HaroonData: WorkDetailProps = {
    url: "/haroon",
    coverImgURL: b6,
    imgSources: haroonImgSources,
    workName: `HAROON MOSQUE\n\
    RE-BRANDING PROJECT`,
    role: Role.GraphicDesigner,
    description: 'To promote the economy and develop the community, Haroon Mosque Re-Branding Project. The project was created through the collaboration of Trawell, TCDC, and volunteer designers. We design based on the idea of sustainable design and the community owns their space, so they have joined some part of the design.'
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