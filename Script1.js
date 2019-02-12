var leftsum = 0, rightsum = 0;  
    function addDisk(){            
        var weight = document.getElementById("weight").value;            
        var p = document.getElementsByClassName("disks") [0]; 
        var div = document.createElement("div");
        div.className = "disk";    
        div.setAttribute("diskweight", weight);
        div.innerHTML = "<div class = 'weightnum'>"+ weight + "</div>";
        p.appendChild(div);
    };                                        

    $(document).on('click', '.disk', function(){ 
        if($(this).parent().attr('class') == "disks"){
            $(this).clone().appendTo('.leftdisks');
            leftsum += parseInt($(this).attr("diskweight"));                       
            $(this).remove();                                
        }           
        if($(this).parent().attr('class') == "leftdisks"){
            $(this).clone().appendTo('.disks');                  
            $(this).remove();  
            leftsum -= parseInt($(this).attr("diskweight"));  
        }           
        if($(this).parent().attr('class') == "rightdisks"){
            $(this).clone().appendTo('.disks');                  
            $(this).remove();  
            rightsum -= parseInt($(this).attr("diskweight")); 
        }    
        if(rightsum == leftsum & rightsum !=0){
            $('a').css("visibility", "visible");
        }
        if(rightsum != leftsum){
            $('a').css("visibility", "hidden");
        }
    });

    document.oncontextmenu = function() {return false;}; 
    $(document).on('mousedown','.disk', function(e){
        if(e.which == 3){
            if($(this).parent().attr('class') == "leftdisks"||  $(this).parent().attr('class') == "rightdisks"){                
            }else{
                $(this).clone().appendTo('.rightdisks');
                rightsum += parseInt($(this).attr("diskweight"));                      
                $(this).remove();
            }
            if(rightsum == leftsum & rightsum !=0){
            $('a').css("visibility", "visible");
            }
            if(rightsum != leftsum){
            $('a').css("visibility", "hidden");
            }
        }
    });  