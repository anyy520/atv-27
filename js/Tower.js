
// Veja o arquivo Tower.js criado dentro da pasta Js.
class Tower {
  // 5. Crie um corpo tower dentro da função constructor()
  constructor(    ) {
    // 6. Adicione o parâmetro adicional options em Bodies.rectangle(), que fará um pequeno ajuste no mecanismo de física para o objeto
   


    // 10.Carregue e adicione a imagem da Torre dentro da classe Tower
   

    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
  // 7. Adicione este objeto ao World (mundo).
  
    
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
