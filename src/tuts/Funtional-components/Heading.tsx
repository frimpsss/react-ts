import { ReactElement } from "react"

type headingProp = {
    title: string
}

const Heading = ({title}:headingProp): ReactElement => {
    return <h1>{title}</h1>
}

export default Heading