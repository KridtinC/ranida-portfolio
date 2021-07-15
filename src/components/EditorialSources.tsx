import e1 from '../assets/editorial/e1.png'
import e2 from '../assets/editorial/e2.png'
import e3 from '../assets/editorial/e3.png'
import e4 from '../assets/editorial/e4.png'
import e5 from '../assets/editorial/e5.png'
import e6 from '../assets/editorial/e6.png'

import creed1 from '../assets/editorial/creed/creed1.png'
import creed2 from '../assets/editorial/creed/creed2.png'
import creed3 from '../assets/editorial/creed/creed3.png'

import ss1 from '../assets/editorial/sani-system/sani-system1.png'
import ss2 from '../assets/editorial/sani-system/sani-system2.png'
import ss3 from '../assets/editorial/sani-system/sani-system3.png'

import ttt1 from '../assets/editorial/thong-thon-time/thong-thon-time1.png'
import ttt2 from '../assets/editorial/thong-thon-time/thong-thon-time2.png'
import ttt3 from '../assets/editorial/thong-thon-time/thong-thon-time3.png'

import fibo1 from '../assets/editorial/fibonacci/fibonacci1.png'
import fibo2 from '../assets/editorial/fibonacci/fibonacci2.png'
import fibo3 from '../assets/editorial/fibonacci/fibonacci3.png'

import kks1 from '../assets/editorial/kor-kong-sai/kor-kong-sai1.png'
import kks2 from '../assets/editorial/kor-kong-sai/kor-kong-sai2.png'
import kks3 from '../assets/editorial/kor-kong-sai/kor-kong-sai3.png'

import tf1 from '../assets/editorial/type-founder/type-founder1.png'
import tf2 from '../assets/editorial/type-founder/type-founder2.png'
import tf3 from '../assets/editorial/type-founder/type-founder3.png'

import { Role, WorkDetailProps } from '../pages/work-detail/WorkDetail'

const creedImgSources: string[] = [creed1, creed2, creed3]
const ssImgSources: string[] = [ss1, ss2, ss3]
const tttImgSources: string[] = [ttt1, ttt2, ttt3]
const fiboImgSources: string[] = [fibo1, fibo2, fibo3]
const kksImgSources: string[] = [kks1, kks2, kks3]
const tfImgSources: string[] = [tf1, tf2, tf3]

const CreedData: WorkDetailProps = {
    url: "/creed",
    coverImgURL: e1,
    imgSources: creedImgSources,
    workName: 'CREED FREE COPY',
    role: Role.ArtDirectorAndEditor,
    description: "The concept “Belief” came from an idea “Everyone's beliefs change every day”. Creed is free copy that talk about faith. To support the concept, we designed dynamic layouts and flashy colors."
}

const Sani1Data: WorkDetailProps = {
    url: "/sani-system",
    coverImgURL: e2,
    imgSources: ssImgSources,
    workName: 'SANI SYSTEMS',
    role: Role.ArtDirector,
    description: 'In the concept of “friend who cares ”, there are 3 items, Corporate Identity, leaflet, Company Profile, for Sani-Systems.'
}

const TTTData: WorkDetailProps = {
    url: "/thon-thong-time",
    coverImgURL: e3,
    imgSources: tttImgSources,
    workName: 'THON THONG TIME',
    role: Role.GraphicDesigner,
    description: 'There is an brochure design for city walk trip name “Thon Thong Time”. It is one of Jlongsan Pop-up Park 2020, a transforming wasteland into public space project.'
}

const FibonacciData: WorkDetailProps = {
    url: "/fibonacci",
    coverImgURL: e4,
    imgSources: fiboImgSources,
    workName: `HAVE YOU EVER TRAVELED\n
    WITH FIBONACCI ?`,
    role: Role.GraphicDesigner,
    description: 'A book about the trial of travel by Fibonacci Number to see street art from various artis in BUKRUK Festival.'
}

const KKSData: WorkDetailProps = {
    url: "/kor-kong-sai",
    coverImgURL: e5,
    imgSources: kksImgSources,
    workName: `KOR KONG SAI\n
    RE-DESIGN`,
    role: Role.GraphicDesigner,
    description: 'It is re-design all of S.E.A Write Book name “Kor Kong Sai”. It is only school project. The book talks about tumultuous life and compares life to a pile of sand that has been formed and destroyed by water. An llustrator of each chapter can be unfolded in the form of water waves.'
}

const TypeFounderData: WorkDetailProps = {
    url: "/type-founder",
    coverImgURL: e6,
    imgSources: tfImgSources,
    workName: 'TYPE FOUNDER',
    role: Role.GraphicDesigner,
    description: 'Finding capital letter, small letter, and number of Romans typeface in Bang Pa In Palace.'
}

export {
    CreedData,
    Sani1Data,
    TTTData,
    FibonacciData,
    KKSData,
    TypeFounderData
}