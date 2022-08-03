import React, { useState, useEffect, useRef } from 'react'

import { useParams } from 'react-router-dom'

import tmdbApi from '../../api/tmbdApi'
import apiConfig from '../../api/apiConfig'

const VideoList = props => {

    const { category } = useParams()

    const [videos, setVideos] = useState([])

    useEffect(() => {
        const getVideos = async () => {
            const response = await tmdbApi.getVideos(category, props.id)
            setVideos(response.results.slice(0, 5))
        }
        getVideos()
    }, [category, props.id])

    return (
        <>
            {
                videos.map((item, i) => (
                    <Video key={i} item={item} />
                ))
            }
        </>
    )
}


const Video = props => {

    const iframeRef = useRef(null)

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)

    }, [])

    return (
        <div className="video">
            <div className="video__title">
                <h2>{props.item.name}</h2>
            </div>
            <iframe src={`https://www.youtube.com/embed/${props.item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}


export default VideoList
