const botaoIniciaVideo = document.querySelector("[data-camera-inicia]");
const cameraVideo = document.querySelector("[data-camera-video]");
const video = document.querySelector("[data-video]");
const botaoTiraFoto = document.querySelector("[data-tira-foto]");
const concluido = document.querySelector("[data-camera-foto]")
const foto = document.querySelector("[data-foto]");
const botaoEnviar = document.querySelector("[data-enviar]");

imagemUrl = "";


botaoIniciaVideo.addEventListener('click', async function() {
    const iniciaVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});    

    botaoIniciaVideo.style.display = 'none';
    cameraVideo.style.display = 'block';

    video.srcObject = iniciaVideo;

    console.log(video.srcObject);
})

botaoTiraFoto.addEventListener('click', function () {
    foto.getContext('2d').drawImage(video, 0, 0, foto.width, foto.height);
    imagemUrl = foto.toDataURL("image/jpeg");

    cameraVideo.style.display = 'none';
    concluido.style.display = 'block'

})

botaoEnviar.addEventListener('click', () => {
    window.location.href = "../paginas/finalizado.html";
}) 
