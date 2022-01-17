
var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}


// order btn
$(document).ready(function(){
  $("button#btn").click(function(event){
   let pname = $("name").val();
   let psize = $("#size").val();
   let pcrust = $("#crust").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1500;
       console.log(price);
     break;
     case "medium":
       price = 900;
       console.log("The price is "+price);
     break;
     case "small":
       price = 700;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 200;
      break;
      case "Stuffed":
        crust_price = 150;
      break;
      case "Gluten-free":
        crust_price = 200;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = ptopping.length*50;
    console.log("toppins value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("#btn").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("#add").show();
      $("#check").show();
      $(".detail").hide();
      $("#orders.choise").show();
      $("#orders").show();
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($("#name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#total").html(total);
    
// pizza
    $("#add").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1500;
           console.log(price);
         break;
         case "medium":
           price = 900;
           console.log("The price is "+price);
         break;
         case "small":
           price = 700;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 250;
          break;
          case "Stuffed":
            crust_price = 150;
          break;
          case "Gluten-free":
            crust_price = 200;
          break;
          default:
            console.log("No price"); 
        }
        let topping_value = ptopping.length*50;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      // function
      var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
      
      

    });
    // Check btn
    $("button#check").click(function(){ 
      $("button#check").hide();
      $("button#add").hide();
      $("button.delivery").show();
      $("#delivery").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });

    // delivery btn
    $("button#delivery").click(function(){
      $("#piz").hide();
      $("#orders .h5").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button#deliver").hide();
      $("#pizzatotal").hide();
      $("#delivery").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("You will pay sh. "+deliceryamount+" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+deliceryamount);
    });

    // submit btn
    $("button#sub").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $("#delivery").hide();
      $("button#sub").hide();
      $(".delivery").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("Final Bill is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finalmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finalmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#delivery").show();
      }
    });
   event.preventDefault();
  });
});

