import SearchBar, { SearchForm } from '@/components/SearchBar';
import landingImage from '../assets/landing.png';
import { useNavigate } from 'react-router-dom';

console.log("Texto e imagen secundaria en HomePage.tsx");

export default function HomePage() {
    const navigate = useNavigate();

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: "/search/" + searchFormValues.searchQuery
        })
    }
    
    return (
        <div className="flex flex-col gap-12">
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8
                        flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-blue-900">
                    Todo Lo Que Necesitas Mas Cerca De Ti
                </h1>
                <span className="text-x1">
                    ¡Encuentra todo lo que necesites a un solo click!
                </span>
                <SearchBar
                    placeHolder='Busca por nombre de la tienda'
                    onSubmit={handleSearchSubmit} searchQuery={''} />
                <div className='grid md:grid-cols-2 gap-5'>
                    <img src={landingImage} />
                    <div className='flex flex-col items center justify-center gap-4 text center'>
                        {/*<span className='font-bold text-3xl tracking-tighter'>
                            Pide comida para llevar aún más rápido
                        </span>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
