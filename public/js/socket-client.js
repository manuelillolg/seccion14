//Referencias de html

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const btnEnviar  = document.querySelector('#btnEnviar');
const txtMensaje = document.querySelector('#txtMensaje');

const socket = io();

socket.on('connect',()=>{
    
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', ()=>{
    
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('enviar-mensaje',(payload)=>{
    console.log(payload);
})


btnEnviar.addEventListener('click',()=>{
    const mensaje = txtMensaje.value;
    const payload={
        mensaje,
        id: 'ghjkl',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje',payload,(id)=>{
        console.log("Id recibido del server: ",id);
    });
});
