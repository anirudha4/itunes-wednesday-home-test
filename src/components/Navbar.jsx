import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useState } from 'react'
import logo from '../logo.svg'
export default function Navbar() {
    const term = useStoreState(state => state.searchTerm);
    const setTerm = useStoreActions(actions => actions.setTerm);
    const fetchArtists = useStoreActions(actions => actions.fetchArtists);
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            fetchArtists(term)
        }
    }
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="right">
                <div className="search">
                    <input type="search" value={term} placeholder="Search" onKeyDown={handleEnter} onChange={e => setTerm(e.target.value) }  />
                    <span className="fas fa-search"></span>
                </div>
            </div>
        </div>
    )
}
