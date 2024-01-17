import Particles from "react-particles";
import particlesConfig from "./particles-config";
import { loadFull } from "tsparticles";
const ParticlesBackground = () => {

     const loadParticles = async(main) => {
        await loadFull(main);
    }
    return(
        <Particles params={particlesConfig}
        />
    )
}

export default ParticlesBackground