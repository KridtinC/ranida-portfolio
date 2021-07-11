import i1 from '../assets/illustration/i1.png'
import i2 from '../assets/illustration/i2.png'
import i3 from '../assets/illustration/i3.png'

import twp1 from '../assets/illustration/the-writer-project/twp1.png'
import twp2 from '../assets/illustration/the-writer-project/twp2.png'
import twp3 from '../assets/illustration/the-writer-project/twp3.png'

import sem1 from '../assets/illustration/shell-eco-marathon/sem1.png'
import sem2 from '../assets/illustration/shell-eco-marathon/sem2.png'
import sem3 from '../assets/illustration/shell-eco-marathon/sem3.png'

import synphaet1 from '../assets/illustration/synphaet/synphaet1.png'
import synphaet2 from '../assets/illustration/synphaet/synphaet2.png'
import synphaet3 from '../assets/illustration/synphaet/synphaet3.png'

import { WorkDetailProps } from '../pages/work-detail/WorkDetail'

const twpImgSources: string[] = [twp1, twp2, twp3]
const semImgSources: string[] = [sem1, sem2, sem3]
const synphaetImgSources: string[] = [synphaet1, synphaet2, synphaet3]

const TheWriterProjectData: WorkDetailProps = {
    url: "/the-writer-project",
    coverImgURL: i1,
    imgSources: twpImgSources,
    workName: 'The Writer Project',
}

const ShellEcoMarathonData: WorkDetailProps = {
    url: "/shell-eco-marathon",
    coverImgURL: i2,
    imgSources: semImgSources,
    workName: 'Shell Eco Marathon',
}

const SynPhaetData: WorkDetailProps = {
    url: "/synphaet",
    coverImgURL: i3,
    imgSources: synphaetImgSources,
    workName: 'Synphaet',
}

export {
    TheWriterProjectData,
    ShellEcoMarathonData,
    SynPhaetData
}