import tw from "tailwind-styled-components"
import Map from "./components/Map";

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <Bottom>Home</Bottom>
    </Wrapper>
  )
}


const Wrapper = tw.div`
w-full h-screen bg-gray-200 flex flex-col px-2
`;


const Bottom = tw.div`
flex-1
`;