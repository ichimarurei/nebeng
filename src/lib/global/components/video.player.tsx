type T_VideoPlayerProps = {
    embedId: string
}

export function VideoPlayer({ embedId }: T_VideoPlayerProps) {
    return (
        <iframe
            width="100%"
            height="100%"
            className="aspect-video rounded-xl"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    )
}
