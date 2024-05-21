class personagem 
{
    constructor(nomePersonagem, idadePersonagem, tipoPersonagem)
    {
        this.nomePersonagem = nomePersonagem
        this.idadePersonagem = idadePersonagem
        this.tipoPersonagem = tipoPersonagem
    }

    atacar()
    {
        if (this.tipoPersonagem === "mago")
            {
                console.log(`O jogador ${this.nomePersonagem} de idade ${this.idadePersonagem} com o personagem ${this.tipoPersonagem} atacou usando magia`)
            }
            else if (this.tipoPersonagem === "guerreiro")
                {
                    console.log(`O jogador ${this.nomePersonagem} de idade ${this.idadePersonagem} com o personagem ${this.tipoPersonagem} atacou usando espada`)
                }
                else if (this.tipoPersonagem === "monge")
                    {
                        console.log(`O jogador ${this.nomePersonagem} de idade ${this.idadePersonagem} com o personagem ${this.tipoPersonagem} atacou usando artes marciais`)
                    }
                    else if (this.tipoPersonagem === "ninja")
                        {
                            console.log(`O jogador ${this.nomePersonagem} de idade ${this.idadePersonagem} com o personagem ${this.tipoPersonagem} atacou usando shuriken`)
                        }
                        else
                        {
                            console.log("Personagem inválido")
                        }
    }
    
}

let nomePerso = new personagem("Paulo", 28, "guerreiro")

nomePerso.atacar()