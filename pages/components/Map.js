import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl";
import { useEffect } from 'react'

mapboxgl.accessToken = 
'pk.eyJ1IjoiZGFuaWVsLXBnIiwiYSI6ImNrdno1cmFidDAybnIyeHBxNGlvZWM0M2gifQ.QiOd3k4LhKI86C0Kq6qLCg';


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container : "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011,39.39172],
          zoom:3
        })
      },[])
    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1
`
