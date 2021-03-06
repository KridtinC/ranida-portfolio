import u1 from '../assets/uxui/u1.png'
import u2 from '../assets/uxui/u2.png'
import u3 from '../assets/uxui/u3.png'
import u4 from '../assets/uxui/u4.png'
import u5 from '../assets/uxui/u5.png'

// import kblp1 from '../assets/uxui/k-bank-line-points/k-bank-line-points1.png'
import kblp2 from '../assets/uxui/k-bank-line-points/k-bank-line-points2.png'
import kblp3 from '../assets/uxui/k-bank-line-points/k-bank-line-points3.png'

// import lpb1 from '../assets/uxui/line-points-back/line-points-back1.png'
import lpb2 from '../assets/uxui/line-points-back/line-points-back2.png'
import lpb3 from '../assets/uxui/line-points-back/line-points-back3.png'

import agnosticUI1 from '../assets/uxui/agnostic-ui/agnostic-ui1.png'
import agnosticUI2 from '../assets/uxui/agnostic-ui/agnostic-ui2.png'
import agnosticUI3 from '../assets/uxui/agnostic-ui/agnostic-ui3.png'

import lpa1 from '../assets/uxui/line-points-awareness/line-points-awareness1.png'
import lpa2 from '../assets/uxui/line-points-awareness/line-points-awareness2.png'

import { Role, WorkDetailProps } from '../pages/work-detail/WorkDetail'
import { lddImgSources } from './BrandingSources'

const kblpImgSources: string[] = [kblp2, kblp3]
const lpbImgSources: string[] = [lpb2, lpb3]
const agnosticUIImgSources: string[] = [agnosticUI1, agnosticUI2, agnosticUI3]
const linePointsAwarenessImgSources: string[] = [lpa1, lpa2]

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
    workName: 'KBANK x LINE POINTS',
    role: Role.GraphicDesigner,
    description: 'This is video which make an awareness of KBANK LINE POINTS Credit Card and to inform its benefits. In this video, my part is designing an mobile interface and all of storyboard.',
    youtubeURL: 'OM6I-K_UdZg'
}

const LineShoppingData: WorkDetailProps = {
    url: "/line-points-back",
    coverImgURL: u3,
    imgSources: lpbImgSources,
    workName: 'LINE POINTS BACK',
    role: Role.GraphicDesigner,
    description: 'This is video which make an awareness of LINE POINTS and to inform the message “1 POINTS = 1 BAHT”. In this video, my part is designing an mobile interface and all of storyboard.',
    youtubeURL: '1oGJD1271VY'
}

const Agnostic2Data: WorkDetailProps = {
    url: "/agnostic-ui",
    coverImgURL: u4,
    imgSources: agnosticUIImgSources,
    workName: 'AGNOSTIC',
    role: Role.ArtDirectorAndGraphic,
    description: 'In the concept of “The Connector”, being a center networking for businesses, we designed Corporate Identity, stationery, and UX/UI for Agnostic fund.'
}

const LINEPointsAwarenessData: WorkDetailProps = {
    url: "/line-points-awareness",
    coverImgURL: u5,
    imgSources: linePointsAwarenessImgSources,
    workName: `LINE POINTS AWARENESS\n\
    SHORT MOVIE`,
    role: Role.GraphicDesigner,
    description: 'This is video which make an awareness of LINE POINTS and to inform the message "Use LINE POINTS to give life more choices". In this video, my part is designing an mobile interface.',
    youtubeURL: 'nPAlZL6c9q4'
}

export {
    LDD2Data,
    LinePointData,
    LineShoppingData,
    Agnostic2Data,
    LINEPointsAwarenessData
}