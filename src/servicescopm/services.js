import './services.css';
import Hservices from "./serviceshead"
import Develop from './development';
import Design from './designing';
import Market from './market';
function Services() {
return(
    <>
    <Hservices />
    <div className='con1'>
<div className='services'>
<Develop />
</div>
<div className='services'>
<Design />
</div>
<div className='services'>
<Market />
</div>
</div>
    </>
)    
}
export default Services