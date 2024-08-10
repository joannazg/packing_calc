body.getElementById('destination_form').addEventListener('submit', function(packing_amount)
    {
    // Prevent the form from submitting normally
    packing_amount.preventDefault();

    var destination = body.getElementById('destination').value;
    var fancy = body.getElementById('fancy').value;
    var trip_length = body.getElementById('trip_length').value;


        const packing_list= (.25,"shorts",.25, "pants",1, "t-shirts",.5, "long sleeved shirts",1, "underwear",1, "socks")
        
        for (let x in packing_list)
            {
                packing_list[x]*=trip_length;
                x=x+2;
            }

        function packing_extras(fancy,destination)
        {
            if (fancy==FANCY)
            {
                packing_list.push(1, "fancy outfit");
            }

            if (destination == SNOWY || destination == COLD)
            {
                packing_list.push(1,"jacket");
                packing_list[0].delete();
                packing_list[1].delete();
                packing_list[4]/=2;
            }

            if (destination == HOT)
            {
                packing_list[2].delete();
                packing_list[3].delete();
                packing_list[6].delete();
                packing_list[7].delete();  
            }
            
            if (destination == RAINY)
            {
                packing_list.push(1,"Raincoat")
            }
        return packing_list;
        }
        
    body.getElementById("final_list").innerHTML = packing_list;
    })