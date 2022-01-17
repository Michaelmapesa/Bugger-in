var price, crust_price, topping_price;
let total=0;
class pizza{
    constructor(name,size,crust,topping,total){
        this.name=name;
        this.size=size;
        this.crust=crust;
        this.topping=topping;
        this.total=total;
    }

}
$(document).ready(function(){
    $("#button1").click(function(event){
        let name1=$("#name").val();
        let size1=$("#size").val();
        let crust1=$("#crust").val();
        let topping1=[];
        $.each($("input[name='topping']:checked"),function(){
            topping1.push($(this).val());
        
        });
        console.log(topping1.join(", "));

        switch(size1){
            case "0":
            break;
            case "large":
                price=1500;
                console.log(price);
               break;
               case "medium":
                   price=900;
                   console.log("price");
                   break;
                   case "small":
                       price=700;
                       console.log(price);
                       default:
                           console.log("error,try solve!");
        }

        switch(crust1){
            case "0":
                crust_price=0;
                break;
                case "Crispy":
                    crust_price=250;
                    break;
                    case "Stuffed":
                        crust_price=150;
                        break;
                        case "Gluten-free":
                            crust_price=200;
                            break;
                            default:
                                console.log("price unavailable");
        }
        let topping_value=topping1.length*50;
        console.log("your topping value" + topping_value);

        if((crust1=="0")&&(size1=="0")){
            console.log("You have no selection");
            $("#orders").hide();
            $("#button1").show();
            $(".detail").show();
            alert("Please have a selection of your order");

        }
        else
    });   
});