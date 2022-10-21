import React from 'react'

const Main: React.FC = () =>
{
  return (
    <div className="pageContent">
      <div className="row-1">
        <ul className="Apps">
          <li className='App'><a href='https://plex.bargot.nl'><img src={`${ process.env.PUBLIC_URL }/Icons/plex.png`} alt="Plex icon" /><p>Plex</p></a></li>
          <li className="App"><a href='https://nextcloud.bargot.nl'><img src={`${ process.env.PUBLIC_URL }/Icons/nextcloud.png`} alt="Nextcloud icon" /><p>NextCloud</p></a></li>
          <li className="App"><a href='https://octoprint.bargot.nl'><img src={`${ process.env.PUBLIC_URL }/Icons/octoprint.png`} alt="Octoprint icon" /><p>Octoprint</p></a></li>
        </ul>
      </div>
      <div className="row-1">
        <ul className="Apps">
          <li className="App"><a href="https://last.fm/user/barg0t"><img src={`${process.env.PUBLIC_URL}/Icons/lastfm.png`} alt="Last.fm icon" /><p>Last.fm profile</p></a></li>
          <li className="App"><a href="https://rateyourmusic.com/~Bargot"><img src={`${process.env.PUBLIC_URL}/Icons/rym.png`} alt="RYM icon" /><p>RateYourMusic</p></a></li>
          <li className="App"><a href="https://mydramalist.com/profile/Barg0t"><img src={`${process.env.PUBLIC_URL}/Icons/mdl.png`} alt="MDL icon" /><p>MyDramaList</p></a></li>
        </ul>
      </div>
      <div className="row-2">
        <ul className="Apps">
          <li className="App"><a href="https://https://liveadminwindesheim.sharepoint.com/sites/wip"><img src={`${process.env.PUBLIC_URL}/Icons/windesheim.png`} alt="WIP logo" /><p>WIP</p></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Main
