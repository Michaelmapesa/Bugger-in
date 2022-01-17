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
    $("#btn").click(function(event){
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
            $("#btn").show();
            $(".detail").show();
            alert("Please have a selection of your order");

        }
        else{
            $("#btn").hide();
            $(".details").hide();
            $("#orders").show();
               
        }
        total = topping_value + crust_price + price;
        console.log(total);
        let confirmTotal=o;
        confirmTotal=confirmTotal+total;

        $("#pizzaname").html($("#name").val());
        $("#pizzasize").html($("#size").val());
        $("#pizzacrust").html($("#crust").val());
        $("#pizzatopping").html(topping1.join(", "));
        $("#total").html(total);

        
        



        confirmTotal=confirmTotal+total;
        console.log(confirmTotal);

        var addOrder = new pizza(name1,size1,crust1,topping1,total);
        $("#list1").append('<ul><li id="pizzaname">'+addOrder.name+'<ul><li id="pizzasize">'+addOrder.size+'<ul><li id="pizzacrust">'+addOrder.crust+'<ul><li id="pizzatopping">'+addOrder.topping+'<ul><li id="totals">'+addOrder.total+'</li></ul>')
        console.log(addOrder);
    }); 
    
    $("#check").click(function(){
        $("#check").hide();
        $("#add").hide();
        $("#delivery").show();
        $("#addedprice").show();
        console.log("Your bill amount to sh." + confirmTotal);

    });

    $("#delivery").click(function(){
        $("#list1").hide();
        $(".h5").hide();
        $("#sub").hide();
        let costDelivery=confirmTotal+250;
        console.log("Pay: "+costDelivery);
        let location=$("#location").val();
        let person=$("#name").val;
        let phone=$("#phone").val;

        if ($("#name").val() && $("#phone").val() && ("#location").val()!=""){
           $("#finalmessage").append(person+",Thank you,your order will be delivered at " +location+ ". Prepare sh. "+costDelivery);  
           $("#totalbill").hide();
           $("finalmessage").show();
        }
        else{
            alert("You have to fill delivery details");
            $(".delivery").show();
            $("#sub").show();
        }
        

    });
    
});