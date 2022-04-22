import React from 'react'
import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import CardPequeno from './components/CardPequeno/CardPequeno'
import IconSeta from './img/seta.png'
import ImagemPerfil from './img/image0.jpeg'
import IconeEmail from './img/email.png'
import IconeEndereco from './img/endereco.jpg'
import ImagemButton from './components/ImagemButton/ImagemButton'
import ImagemNasa from './img/nasa.png'

function App() {
    return (
        <div className="App">
            <div className="page-section-container">
                <h2>Dados pessoais</h2>
                <CardGrande imagem={ImagemPerfil} nome="Natasha" descricao="Oi, eu sou a Natasha, tenho 24 anos e moro em Mogi das Cruzes - SP." />

                <ImagemButton imagem={IconSeta} texto="Ver mais" />
            </div>

            <div className="page-section-container">
                <CardPequeno icone={IconeEmail} nome="Email:" descricao=" natashagomesr@icloud.com" />
            </div>

            <div className="page-section-container">
                <CardPequeno icone={IconeEndereco} nome="Endereço:" descricao=" Nilo Garcia Alabarce" />
            </div>

            <div className="page-section-container">
                <h2>Experiências profissionais</h2>
                <CardGrande
                    imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
                    nome="Labenu"
                    descricao="Formando desenvolvedores para o mercado de trabalho!"
                />

                <CardGrande imagem={ImagemNasa} nome="NASA" descricao="Apontando defeitos." />
            </div>

            <div className="page-section-container">
                <h2>Minhas redes sociais</h2>
                <ImagemButton imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" texto="Facebook" />

                <ImagemButton imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" texto="Twitter" />
            </div>
        </div>
    )
}

export default App
