import { useParams } from 'react-router'
import { Image } from '../../components/Image';
import { DataMap } from '../../components/Sources'
import './WorkDetail.css'

interface WorkDetailProps {
    url: string
    coverImgURL: string
    imgSources?: string[]
    workName?: string
    role?: string
    description?: string
}

enum Role {
    GraphicDesigner = "GRAPHIC DESIGNER",
    ArtDirector = "ART DIRECTOR",
    ArtDirectorAndGraphic = `ART DIRECTOR &\n\
    GRAPHIC DESIGNER`,
    ArtDirectorAndEditor = "ART DIRECTOR & EDITOR"
}

const WorkDetail = () => {
    let { workURL } = useParams() as {
        workURL: string;
    };
    console.log(workURL)
    var data = DataMap.get(workURL)!!;
    console.log(data)
    return <div>
        {
            data.imgSources ? data.imgSources.map((img) => {
                return <div className="row">
                    <div className="col">
                        <Image source={img}></Image>
                    </div>
                </div>
            }) : null
        }
        <div className="row work-text-container">
            <div className="work-title" data-aos="fade-up">
                {
                    data.workName ? <p className="work-title-name" style={{ whiteSpace: "pre-line" }}>{data.workName}</p> : <p className="work-title-name">NAME OF WORK</p>
                }
                {
                    data.role ? <p className="work-title-role" style={{ whiteSpace: "pre-line" }}>ROLE: {data.role}</p> : <p className="work-title-role">ROLE: role</p>
                }
            </div>
            <div className="work-description" data-aos="fade-up">
                {
                    data.description ? <p>{data.description}</p> : <p>My name is Ranida Pithinattadet. I am a Thai Designer based in Thailand. The personality test shows that I am a kind of INFJ. I like to find various ways for facing creative challenges. I hope the information below help you know me better!</p>
                }
            </div>
        </div>

    </div>

}

export default WorkDetail

export {
    Role
}

export type {
    WorkDetailProps
}