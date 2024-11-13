function registrarPonto() {
    const messageElement = document.getElementById("message");
    const currentDate = new Date();
    messageElement.textContent = `Ponto registrado com sucesso em ${currentDate.toLocaleString()}`;
  }
  
  function registrarHoraExtra() {
    const messageElement = document.getElementById("message");
    messageElement.textContent = "Hora extra registrada com sucesso!";
  }
  
  function consultarSalario() {
    const messageElement = document.getElementById("message");
    messageElement.textContent = "Seu salário atual é de R$ 3.000,00";
  }
  
  function enviarMensagem(){
    alert ("Mensagem enviada com sucesso");

  }