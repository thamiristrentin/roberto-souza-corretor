function filtrarEmpreendimentos() {
    const zonaSelecionada = document.getElementById("selecao-zona").value;
    const cards = document.querySelectorAll(".emp-mini");
  
    cards.forEach(card => {
      const zonaCard = card.getAttribute("data-zona");
      card.style.display = (zonaSelecionada === "tudo" || zonaCard === zonaSelecionada) 
        ? "block" 
        : "none";
    });
  }