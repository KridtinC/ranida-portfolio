import e1 from '../assets/editorial/e1.png'
import e2 from '../assets/editorial/e2.png'
import e3 from '../assets/editorial/e3.png'
import e4 from '../assets/editorial/e4.png'
import e5 from '../assets/editorial/e5.png'
import e6 from '../assets/editorial/e6.png'

import creed1 from '../assets/editorial/creed/creed1.png'
import creed2 from '../assets/editorial/creed/creed2.png'
import creed3 from '../assets/editorial/creed/creed3.png'

import ttt1 from '../assets/editorial/thong-thon-time/thong-thon-time1.png'
import ttt2 from '../assets/editorial/thong-thon-time/thong-thon-time2.png'
import ttt3 from '../assets/editorial/thong-thon-time/thong-thon-time3.png'

import ss1 from '../assets/editorial/sani-system/sani-system1.png'
import ss2 from '../assets/editorial/sani-system/sani-system2.png'
import ss3 from '../assets/editorial/sani-system/sani-system3.png'

import { WorkDetailProps } from '../pages/work-detail/WorkDetail'

const creedImgSources: string[] = [creed1, creed2, creed3]
const tttImgSources: string[] = [ttt1, ttt2, ttt3]
const ssImgSources: string[] = [ss1, ss2, ss3]

const CreedData: WorkDetailProps = {
    url: "/creed",
    coverImgURL: e1,
    imgSources: creedImgSources,
    workName: 'Creed',
}

const Sani1Data: WorkDetailProps = {
    url: "/sani-system",
    coverImgURL: e2,
    imgSources: ssImgSources,
    workName: 'Sani System',
}

const Sani2Data: WorkDetailProps = {
    url: "/sani-system",
    coverImgURL: e3,
    imgSources: ssImgSources,
    workName: 'Sani System',
}

const TTTData: WorkDetailProps = {
    url: "/thon-thong-time",
    coverImgURL: e4,
    imgSources: tttImgSources,
    workName: 'Thong Thon Time',
}

const KKSData: WorkDetailProps = {
    url: "/korkongsai",
    coverImgURL: e5,
    imgSources: [],
    workName: 'korkongsai',
}

const HiaBupData: WorkDetailProps = {
    url: "/hiabup",
    coverImgURL: e6,
    imgSources: [],
    workName: 'hiabup',
}

export {
    CreedData,
    Sani1Data,
    Sani2Data,
    TTTData,
    KKSData,
    HiaBupData
}