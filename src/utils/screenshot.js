import html2canvas from 'html2canvas'

window.html2canvas = html2canvas

export function salvar(){
    let dropdown = document.getElementById("optionsList");
    dropdown.style.display = 'block';

    return html2canvas(document.querySelector("#capture")).then(canvas => { 
        document.addEventListener('click', function(event){
            if (event.target.matches('#downloadPng')){
                var imageData = canvas.toDataURL("image/png");
                var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
                var downloadPng = document.getElementById("downloadPng")
                downloadPng.setAttribute('href', newData);
                downloadPng.setAttribute('download', 'image.png');
                dropdown.style.display = 'none';
            }
            else if (event.target.matches('#downloadJpeg')){
                var imageData2 = canvas.toDataURL("image/jpeg");
                var newData2 = imageData2.replace(/^data:image\/jpeg/, "data:application/octet-stream");
                var downloadJpeg = document.getElementById("downloadJpeg")
                downloadJpeg.setAttribute('href', newData2);
                downloadJpeg.setAttribute('download', 'image.jpeg');
                dropdown.style.display = 'none'
            }
            else if (event.target.matches('#downloadSvg')){
                var imageData3 = canvas.toDataURL("image/svg");
                var newData3 = imageData3.replace(/^data:image\/svg/, "data:application/octet-stream");
                var downloadSvg = document.getElementById("downloadSvg")
                downloadSvg.setAttribute('href', newData2);
                downloadSvg.setAttribute('download', 'image.svg');
                dropdown.style.display = 'none'
            }
            else if(dropdown.style.display == 'block' && event.target.matches('#download')){
                dropdown.style.display = 'none'
            }
            else if(dropdown.style.display == 'none' && event.target.matches('#download')){
                dropdown.style.display = 'block'
            }
            return;
            event.preventDefault();

            console.log(event.target);

        }, false)
    });
}



