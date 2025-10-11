const produtos =  {
    'mistura-casa':{
        id: 1,
        nome: 'Mistura da Casa',
        descricao: 'Uma mistura delicada de cafés do Mexico, Bolivia e Guatemala',
        preco: 12.00,
        img: './img/cafe1.jpg',
    },
    'cafe-arabico':{
        id: 2,
        nome: 'Café Arábico com Leite',
        descricao: 'Expresso, leite fervido e xarope de Chocolate',
        preco: 13.50,
        img: './img/cafe2.jpg',
    },
    'capuccino':{
        id: 3,
        nome: 'Capuccino',
        descricao: 'Uma mistura de expresso, leite fervido e espuma',
        preco: 17.98,
        img: './img/cafe3.jpg',
    },
    'cha-chai':{
        id: 4,      
        nome: 'Chá Chai',
        descricao: 'Uma Bebida Condimentada com chá preto, especiais, leite e mel',
        preco: 14.99,
        img: './img/cafe4.jpg',
    }        
};

function openPopUp(produtoId){
    console.log('ProdutoId recebido:', produtoId);
    const produto = produtoId; // pega a lista de produtos definidas acima
    console.log('Produto encontrado:', produto);
    //overlay para efeito de fundo

    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justfy-content: center;
        align-itens: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;    
    `;
    const popup = document.createElement('div');
    popup.style.cssText = `
        background: #dadada;
        border-radius: 10px;
        padding: 30px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
        position: relative;
    
    `;
    popup.innerHTML = `
    <button id="fechar-popup" style="
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 28px;
      cursor: pointer;
      color: #666;
      line-height: 1;
      padding: 5px 10px;
    ">&times;</button>
    
    <h2 style="
      color: #5C4033;
      margin-bottom: 15px;
      font-size: 28px;
    ">${produto.nome}</h2>
    
    <p style="
      color: #666;
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 1.6;
    ">${produto.descricao}</p>
    
    <div style="
      background: #f5f5f5;
      padding: 15px;
      border-radius: 10px;
      margin-bottom: 25px;
    ">
      <p style="
        font-size: 24px;
        color: #5C4033;
        font-weight: bold;
        margin: 0;
      ">${produto.preco}</p>
    </div>

    <div style="
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 25px;
    ">
    <label style="color: #5C4033; font-weight: bold;">Quantidade:</label>
    <button id="diminuir" style="
        background: #5C4033;
        color: white;
        border: none;
        width: 35px;
        height: 35px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 20px;
    ">-</button>

    <span id="quantidade" style="
        font-size: 20px;
        font-weight: bold;
        min-width: 30px;
        text-align: center;
    ">1</span>
    <button id="aumentar" style="
        background: #5C4033;
        color: white;
        border: none;
        width: 35px;
        height: 35px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 20px;
    ">+</button>
    </div>
    <button id="confirmar-pedido" style="
      background: #5C4033;
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 10px;
      font-size: 18px;
      cursor: pointer;
      width: 100%;
      font-weight: bold;
      transition: background 0.3s;
    ">Confirmar Pedido</button>            
    
    `;
    // adicionado o popup ao overlay
  overlay.appendChild(popup);
  document.body.appendChild(overlay)

  // variavel para controlar a quantidade
  let quantidade = 1;

  // event listeners
  document.getElementById('fechar-popup').onClick = fecharPopup;
  overlay.onclick = (e) => {
    if (e.target === overlay) fecharPopup();
  };

  document.getElementById('aumentar').onclick = () =>{
    quantidade++;
    document.getElementById('quantidade').textContent = quantidade;
  };

  // ajustar valores dos produtos
  document.getElementById('diminuir').onclick = () =>{
    quantidade--;
    document.getElementById('quantidade').textContent = quantidade;
  };

  document.getElementById('confirmar-pedido').onclick = () => {
    alert(`Pedido Confirmado\n ${quantidade}x ${produto.nome}\n Total: R$ 00, 00`)
    fecharPopup();
  };
  document.getElementById('valor').onclick = {

  }
    
  // hover effect no botão confirmar
  const btnConfirmar = document.getElementById('confirmar-pedido');
  btnConfirmar.onmouseover = () => btnConfirmar.style.background = '#4a3329';
  btnConfirmar.onmouseout = () => btnConfirmar.style.background = '#5C4033';
};


// função para fechar o popup
function fecharPopup(){
  const overlay = document.getElementById('popup-overlay');
  if(overlay){
    overlay.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => overlay.remove(), 300)
  }
}

// adiciona as animações css
const style = document.createElement('style');
style.TextContent = `
  @keyframes fadeIn{
    from {opacity: 0;}
    to {opacity: 1;}
  }

  @keyframes fadeOut {
    from {opacity: 1;}
    to {opacity: 0;}    
  
  }

  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }    

`;
document.head.appendChild(style);

// Event Listeners para os botões "Fazer pedido"

const selectOption = document.querySelectorAll('.doIt');

selectOption.forEach(btn =>{
  btn.addEventListener("click", () =>{
    let produtoId = btn.dataset.produto
  if(produtoId === "mistura-casa"){
    const id = produtos["mistura-casa"]
    produtoId = id;
  }else if(produtoId === "cafe-arabico"){
    const id = produtos["cafe-arabico"]
    produtoId = id;
  }else if(produtoId === "capuccino"){
    const id = produtos["capuccino"]
    produtoId = id;  }else if (produtoId === "cha-chai"){
    const id = produtos["cha-chai"]
    produtoId = id;
  }
  openPopUp(produtoId);
  });
});



