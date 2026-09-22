import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition, faTwitch } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faPalette } from "@fortawesome/free-solid-svg-icons"

export default function ArtistCard(props: { artist: string, service: string, description: string, icon: IconDefinition, link?: string }) {
    const card = (
        <div className={`${props.link ? 'cursor-pointer' : ''} card rounded flex justify-center items-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow ease-in-out`}>
            <div className="w-24 min-w-24 py-4 max-w-24 flex flex-col space-y-4 justify-center items-center">
                <FontAwesomeIcon icon={props.icon} className="fa-2x text-foamWhite" />
            </div>
            <div className="grow border-l-2 border-foxOrange px-2 py-6 relative">
                {props.link ? <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="link-indicator transition-colors ease-in-out absolute top-2 right-2" /> : null}
                <div className="font-bold text-lg text-foxOrange mb-2">{props.artist}</div>
                <p className="text-foamWhite text-base">{props.description}</p>
            </div>
        </div>
    )

    return (
        <div className="p-4 w-full max-w-sm">
            {props.link ? <a target="_blank" href={props.link}>{card}</a> : card}
        </div>
    )
}