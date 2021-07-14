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

import { WorkDetailProps } from '../pages/work-detail/WorkDetail'

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
    workName: 'The Writer Project',
}

const SynPhaetData: WorkDetailProps = {
    url: "/synphaet",
    coverImgURL: i2,
    imgSources: synphaetImgSources,
    workName: 'Synphaet',
}

const IkuraData: WorkDetailProps = {
    url: "/ikura",
    coverImgURL: i3,
    imgSources: ikuraImgSource,
    workName: 'Ikura',
}

const ArtHistoryData: WorkDetailProps = {
    url: "/art-history",
    coverImgURL: i4,
    imgSources: artHistImgSources,
    workName: 'Art History',
}

const NTMYData: WorkDetailProps = {
    url: "/nice-to-meet-you",
    coverImgURL: i5,
    imgSources: ntmyImgSources,
    workName: 'Nice to Meet You',
}

const RiceitData: WorkDetailProps = {
    url: "/riceit",
    coverImgURL: i6,
    imgSources: riceitImgSouce,
    workName: 'Riceit',
}

export {
    TheWriterProjectData,
    SynPhaetData,
    IkuraData,
    ArtHistoryData,
    NTMYData,
    RiceitData
}