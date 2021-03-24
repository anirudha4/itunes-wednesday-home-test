import { useStoreState } from 'easy-peasy'
import React from 'react'

export default function Result() {
    const term = useStoreState(state => state.searchTerm);
    const isFetched = useStoreState(state => state.isFetched);
    const results = useStoreState(state => state.results);
    return (
        <div className="result-container">
            <h2>Popular Search {term}</h2>
            {isFetched ? (
                <div className="results">
                    {results.map(result => (
                            <div className="card" key={result.trackId}>
                                <div className="card-header">
                                    <div className="card-img">
                                        <img src={result.artworkUrl100} alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <p className="song-name">{result.trackName}</p>
                                        <a target="_blank" href={result.artistViewUrl} className="artist-name">{result.artistName}</a>
                                    </div>
                                </div>
                                <div className="player">
                                    <audio controls>
                                        <source src={result.previewUrl}/>
                                    </audio>
                                </div>
                            </div>
                    ))}
                </div>
            ) : (
                <>
                    <div className="error">Something went wrong. Please try Again later</div>
                </>
            )}
        </div>
    )
}
