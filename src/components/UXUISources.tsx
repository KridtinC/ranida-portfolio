import u1 from '../assets/uxui/u1.png'
import u2 from '../assets/uxui/u2.png'
import u3 from '../assets/uxui/u3.png'
import u4 from '../assets/uxui/u4.png'

import kblp1 from '../assets/uxui/k-bank-line-points/k-bank-line-points1.png'
import kblp2 from '../assets/uxui/k-bank-line-points/k-bank-line-points2.png'
import kblp3 from '../assets/uxui/k-bank-line-points/k-bank-line-points3.png'

import lpb1 from '../assets/uxui/line-points-back/line-points-back1.png'
import lpb2 from '../assets/uxui/line-points-back/line-points-back2.png'
import lpb3 from '../assets/uxui/line-points-back/line-points-back3.png'

import agnosticUI1 from '../assets/uxui/agnostic-ui/agnostic-ui1.png'
import agnosticUI2 from '../assets/uxui/agnostic-ui/agnostic-ui2.png'
import agnosticUI3 from '../assets/uxui/agnostic-ui/agnostic-ui3.png'

import { Role, WorkDetailProps } from '../pages/work-detail/WorkDetail'
import { lddImgSources } from './BrandingSources'

const kblpImgSources: string[] = [kblp1, kblp2, kblp3]
const lpbImgSources: string[] = [lpb1, lpb2, lpb3]
const agnosticUIImgSources: string[] = [agnosticUI1, agnosticUI2, agnosticUI3]

const LDD2Data: WorkDetailProps = {
    url: "/line-horoscope",
    coverImgURL: u1,
    imgSources: lddImgSources,
    workName: 'LINE ดูดวง',
}

const LinePointData: WorkDetailProps = {
    url: "/k-bank-line-points",
    coverImgURL: u2,
    imgSources: kblpImgSources,
    workName: 'KBank x LINE POINTS',
}

const LineShoppingData: WorkDetailProps = {
    url: "/line-points-back",
    coverImgURL: u3,
    imgSources: lpbImgSources,
    workName: 'LINE Points Back',
}

const Agnostic2Data: WorkDetailProps = {
    url: "/agnostic-ui",
    coverImgURL: u4,
    imgSources: agnosticUIImgSources,
    workName: 'AGNOSTIC',
    role: Role.ArtDirectorAndGraphic,
    description: 'In the concept of “The Connector”, being a center networking for businesses, we designed corporate identity, stationery, and UX/UI for Agnostic fund.'
}

export {
    LDD2Data,
    LinePointData,
    LineShoppingData,
    Agnostic2Data
}