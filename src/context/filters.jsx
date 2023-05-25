import { createContext, useState } from "react";

// Creando el contexto
export const FiltersContext = createContext()

// Crear el provider
export function FilterProvider ({children})
{
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return(
        <FiltersContext.Provider value= {{
            filters, setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}