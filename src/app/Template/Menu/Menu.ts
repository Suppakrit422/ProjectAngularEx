export class Menu {
    public Menu_Version:string;
    public LMenu:LMenu[] =[]; 
    
    constructor(M:string,L:LMenu[]) {
       this.Menu_Version = M
       this.LMenu = L
    }

}

export class LMenu {
    public Name:string;
    public icon_style:string;
    public URL:string;
    
    constructor(N: string,I: string,U:string){
        this.Name = N
        this.icon_style = I
        this.URL = U
    }

}

