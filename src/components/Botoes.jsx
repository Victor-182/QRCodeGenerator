import React, {Component} from 'react';

import { salvar } from '../utils/screenshot.js'
import { imprimir } from '../utils/print.js'

import '../style/botoes.css'

export default class Botoes extends Component {
    render(){
        return  (<div id="botoes">
        <button id="download" onClick={salvar}>Baixar imagem</button>
            <ul id="optionsList">
                <li><a id="downloadPng">PNG</a></li>
                <li><a id="downloadJpeg">JPEG</a></li>
                <li><a id="downloadSvg">SVG</a></li>
            </ul>
        <button id="imprimir" onClick={imprimir}>Imprimir</button>
        </div>)
    }
}