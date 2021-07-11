import o1 from '../assets/others/o1.png'
import o2 from '../assets/others/o2.png'
import o3 from '../assets/others/o3.png'

import co1 from '../assets/others/calm-outdoors/calm-outdoors1.png'
import co2 from '../assets/others/calm-outdoors/calm-outdoors2.png'

import alois1 from '../assets/others/alois/alois1.png'
import alois2 from '../assets/others/alois/alois2.png'
import alois3 from '../assets/others/alois/alois3.png'

import acoc1 from '../assets/others/a-cup-of-chiangrai/a-cup-of-chiangrai1.png'
import acoc2 from '../assets/others/a-cup-of-chiangrai/a-cup-of-chiangrai2.png'
import acoc3 from '../assets/others/a-cup-of-chiangrai/a-cup-of-chiangrai3.png'

import { WorkDetailProps } from '../pages/work-detail/WorkDetail'

const calmImgSources: string[] = [co1, co2]
const aloisImgSources: string[] = [alois1, alois2, alois3]
const acocImgSources: string[] = [acoc1, acoc2, acoc3]

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

const ACupOfChaingRaiData: WorkDetailProps = {
    url: "/a-cup-of-chiangrai",
    coverImgURL: o3,
    imgSources: acocImgSources,
    workName: 'A Cup of Chiang Rai',
}

export {
    CalmData,
    AloisData,
    ACupOfChaingRaiData
}