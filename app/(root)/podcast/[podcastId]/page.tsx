import react from 'react'

const PodcastDetails = ({ params } : {params: {podcastId: string}}) => {
    return (
        <p className= "text-black">PodcastDetails for {params.podcastId}</p>
    )
}

export default PodcastDetails