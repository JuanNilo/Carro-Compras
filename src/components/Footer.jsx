import './Footer.css'
import { useFilter } from '../hooks/useFilters'
export function Footer(){
    const {filters} = useFilter()
    return(
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }{    
            <h4>Prueba tecnica React -
                <span> @El_Naylon</span>
            </h4>
            }
        </footer>
    ) 
}