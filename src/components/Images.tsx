import './common.css'
import Image from './Image'

interface ImagesProps {
    sources: string[][]
}

function Images(props: ImagesProps) {
    return (
        <div>
            {
                props.sources.map((row, idx) => {
                    return (
                        <div className="image-row" key={idx}>
                            {
                                row.map((col, idx) => {
                                    return (
                                        <div className="image-col" key={idx}>
                                            <Image className="" source={col} alt=""></Image>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Images