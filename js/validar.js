document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(name && email) {
      alert(`Gracias por registrarte, ${name}! Te contactaremos en ${email} pronto.`);
      // Aquí podrías agregar el código para enviar los datos a un servidor
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  });
  