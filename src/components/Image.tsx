import { useState } from "react"

interface ImageProps {
    className?: string
    source: string
    alt?: string
}

const Image = (props: ImageProps) => {
    var [isLoading, setIsLoading] = useState(true)
    return (
        <div data-aos="fade-up">
            {
                isLoading ? <div className="spinner-grow" role="status" /> : null
            }
            <img className={props.className} src={props.source} alt={props.alt} onLoad={() => setIsLoading(false)} style={
                isLoading ? { visibility: "hidden" } : { visibility: "visible" }
            } />
        </div>
    )
}

export {
    Image,
}