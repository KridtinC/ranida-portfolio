import i1 from '../assets/illustration/i1.png'
import i2 from '../assets/illustration/i2.png'
import i3 from '../assets/illustration/i3.png'
import i4 from '../assets/illustration/i4.png'
import i5 from '../assets/illustration/i5.png'
import i6 from '../assets/illustration/i6.png'

import twp1 from '../assets/illustration/the-writer-project/the-writer-project1.png'
import twp2 from '../assets/illustration/the-writer-project/the-writer-project2.png'
import twp3 from '../assets/illustration/the-writer-project/the-writer-project3.png'

import synphaet1 from '../assets/illustration/synphaet/synphaet1.png'
import synphaet2 from '../assets/illustration/synphaet/synphaet2.png'
import synphaet3 from '../assets/illustration/synphaet/synphaet3.png'

import ikura1 from '../assets/illustration/ikura/ikura1.png'
import ikura2 from '../assets/illustration/ikura/ikura2.png'
import ikura3 from '../assets/illustration/ikura/ikura3.png'

import artHistory1 from '../assets/illustration/art-history/art-history1.png'
import artHistory2 from '../assets/illustration/art-history/art-history2.png'

import ntmy1 from '../assets/illustration/nice-to-meet-you/nice-to-meet-you1.png'
import ntmy2 from '../assets/illustration/nice-to-meet-you/nice-to-meet-you2.png'

import riceit1 from '../assets/illustration/riceit/riceit1.png'
import riceit2 from '../assets/illustration/riceit/riceit2.png'
import riceit3 from '../assets/illustration/riceit/riceit3.png'

import { Role, WorkDetailProps } from '../pages/work-detail/WorkDetail'

const twpImgSources: string[] = [twp1, twp2, twp3]
const synphaetImgSources: string[] = [synphaet1, synphaet2, synphaet3]
const ikuraImgSource: string[] = [ikura1, ikura2, ikura3]
const artHistImgSources: string[] = [artHistory1, artHistory2]
const ntmyImgSources: string[] = [ntmy1, ntmy2]
const riceitImgSouce: string[] = [riceit1, riceit2, riceit3]

const TheWriterProjectData: WorkDetailProps = {
    url: "/the-writer-project",
    coverImgURL: i1,
    imgSources: twpImgSources,
    workName: 'THE WRITER PROJECT',
    role: Role.GraphicDesigner,
    description: 'There are illustrations of 4 writers for Readery, online bookstore. The illustrations are designed to call for attention and to assemble an interesting content about writers.'
}

const SynPhaetData: WorkDetailProps = {
    url: "/synphaet",
    coverImgURL: i2,
    imgSources: synphaetImgSources,
    workName: `SYNPHAET SERIRAK\n\
    HOSPITAL`,
    role: Role.GraphicDesigner,
    description: 'To promote that Synphaet Serirak Hospital is a general and professional hospital. There are some always-on content for Synphaet Serirak Hospital.'
}

const IkuraData: WorkDetailProps = {
    url: "/ikura",
    coverImgURL: i3,
    imgSources: ikuraImgSource,
    workName: 'IKURA ARMY',
    role: Role.ArtDirector,
    description: 'IKURA ARMY was born from the idea of making people smile. One day, I walked past the guardhouse and I felt that it look like sushi. After that IKURA ARMY has taken an invasion.'
}

const ArtHistoryData: WorkDetailProps = {
    url: "/art-history",
    coverImgURL: i4,
    imgSources: artHistImgSources,
    workName: `ART HISTORY\n\
    WORKSHOP`,
    role: Role.GraphicDesigner,
    description: 'It is Key Visual for M>O>V>E Design based learning program’s workshop. The 11th workshop is about Art History. The change made the era change so, the design came with master piece which came frome  Avant-Garde artists.'
}

const NTMYData: WorkDetailProps = {
    url: "/nice-to-meet-you",
    coverImgURL: i5,
    imgSources: ntmyImgSources,
    workName: `NICE TO MEET YOU\n\
    WORKSHOP`,
    role: Role.GraphicDesigner,
    description: 'It is Key Visual for M>O>V>E Design based learning program’s workshop. The first workshop is where participants meet each others, so the design came with greetings in various forms such as bowing or waving.'
}

const RiceitData: WorkDetailProps = {
    url: "/riceit",
    coverImgURL: i6,
    imgSources: riceitImgSouce,
    workName: 'RICE IT',
    role: Role.ArtDirector,
    description: 'There are Corporate Identity, stationery, packaging, and menu for Rice It, rice planting kit for urban people. We design key visual with 3 various rice characters, brown rice, riceberry, and Khao Sao Hai. '
}

export {
    TheWriterProjectData,
    SynPhaetData,
    IkuraData,
    ArtHistoryData,
    NTMYData,
    RiceitData
}