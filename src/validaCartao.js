module.exports = function validaCartao(numCartao) {
    //numCartao = '4916202289845882';
    var msg = Array();
    var tipo = null;
    
    if(numCartao.length > 16 || numCartao[0]==0){
        
        msg.push("Número de cartão inválido");
        return false;
        
    } else {
        
        var total = 0;
        var arr = Array();
        
        for(i=0;i<numCartao.length;i++){
            if(i%2==0){
                dig = numCartao[i] * 2;
                    
                if(dig > 9){
                    dig1 = dig.toString().substr(0,1);
                    dig2 = dig.toString().substr(1,1);
                    arr[i] = parseInt(dig1)+parseInt(dig2);
                } else {
                    arr[i] = parseInt(dig);
                }
                            
                total += parseInt(arr[i]);
    
            } else {
    
                arr[i] =parseInt(numCartao[i]);
                total += parseInt(arr[i]);
            } 
        }
                
        switch(parseInt(numCartao[0])){
            case 0:
                msg.push("Número incorreto");
                break;
            case 1:
                tipo = "Empresas Aéreas";
                break;
            case 2:
                tipo = "Empresas Aéreas";
                break
            case 3:
                tipo = "Viagens e Entretenimento";
                if(parseInt(numCartao[0]+numCartao[1]) == 34 || parseInt(numCartao[0]+numCartao[1])==37){   operadora = "Amex"; } 
                if(parseInt(numCartao[0]+numCartao[1]) == 36){  operadora = "Diners";   } 
                break
            case 4:
                tipo = "Bancos e Instituições Financeiras";
                operadora = "visa";
                break
            case 5:
                if(parseInt(numCartao[0]+numCartao[1]) >= 51 && parseInt(numCartao[0]+numCartao[1])<=55){   operadora = "Mastercard";   } 
                tipo = "Bancos e Instituições Financeiras";
                operadora = "Mastercard"
                break;
            case 6:
                tipo = "Bancos e Comerciais";
                operadora = "";
                break
            case 7:
                tipo = "Companhias de petróleo";
                operadora = "";
                break
            case 8:
                tipo = "Companhia de telecomunicações";
                operadora = "";
                break
            case 9:
                tipo = "Nacionais";
                operadora = "";
                break
            default:
                msg.push("Número incorreto");
                break;
            }

}
    
if(msg.length>0){   
    
    console.log(msg);   

} else {
    
    console.log(numCartao);
    
        if(total%10 == 0){
            return true;
            console.log("Cartão válido: ("+total+")");
            console.log("Tipo: " + tipo);
            console.log("Operadora: " + operadora);
        } else {
            console.log("Cartão inválido: ("+total+")");
            return false;
        }
    }

}