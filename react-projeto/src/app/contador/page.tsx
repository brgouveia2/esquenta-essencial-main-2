import Contador from '@/components/Contador'
import Pagina from '@/components/template/Pagina'
import React from 'react'

export default function PaginaContador() {
    return (
        <Pagina>
            <Contador valorInicial={1000} />
            <Contador valorInicial={0} />
            <Contador valorInicial={-500} />
        </Pagina>
    )
}
