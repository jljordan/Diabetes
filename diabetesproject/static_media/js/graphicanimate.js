$(window).load(function(){
    console.log("Shit's working");
    var slide = 1;
    $('#graphic').addClass('slide1');
    $('#previous').addClass('nomore');
    $('#information').append("Click through this graphic to see some of the effects that diabetes has on various parts of the body");
    
    $('#next').click(function(){
        if(slide<16){
            slide = slide + 1;
        } else {
            slide = 16;
        }
        changeSlide();
        console.log(slide);
    });
    
    $('#previous').click(function(){
        if(slide>1){
        slide = slide - 1;    
        } else {
        slide = 1;
        }

        changeSlide();
    });
    
    function changeSlide(){        
        if(slide==1){
            $('#graphic').removeClass('slide2');
            $('#graphic').addClass('slide1');
            
            $('#information').empty();
            $('#previous').addClass('nomore');
        }
        
        if(slide==2){
            $('#graphic').removeClass('slide1').removeClass('slide3');
            $('#graphic').addClass('slide2');
            
            $('#information').empty().append("Diabetes affects the heart. Diabetes and coronary disease are closely related.");
            $('#bodypart').empty().append("HEART");
            $('#previous').removeClass('nomore');
        }
        
        if(slide==3){
            $('#graphic').removeClass('slide2').removeClass('slide4');
            $('#graphic').addClass('slide3');
            $('.gaugeneedle').removeClass('rotateneedle');
            
            $('#information').empty().append("Diabetics should be mindful of the fact that diabetes contributes to high blood pressure.");
        }
        
        if(slide==4){
            $('#graphic').removeClass('slide3').removeClass('slide5');
            $('#graphic').addClass('slide4').delay(2000)
            setTimeout(rotateneedle, 500);
            
                function rotateneedle(){
                    $('.gaugeneedle').addClass('rotateneedle');
                }
            
            $('#information').empty().append("Diabetes is also linked to high cholestrol which increases the risk of heart attacks.");
        }
        
        if(slide==5){
            $('#graphic').removeClass('slide4').removeClass('slide6');
            $('#graphic').addClass('slide5');
            $('.gaugeneedle').removeClass('rotateneedle');
            
            $('#information').empty().append("High cholestrol and high blood pressure increase the risk of strokes for diabetics.");
            $('#bodypart').empty().append("HEART");        
        }
        
        if(slide==6){
            $('#graphic').removeClass('slide5').removeClass('slide7');
            $('#graphic').addClass('slide6');
            
            $('#information').empty().append("The kidneys are another organ that is at particular risk of damage from diabetes.");
            $('#bodypart').empty().append("KIDNEYS");
}
        
        if(slide==7){
            $('#graphic').removeClass('slide6').removeClass('slide8');
            $('#graphic').addClass('slide7');
            
            $('#information').empty().append("Diabetic nephropathy is the term for kidney disease as a result of diabetes.");
        }
        
        if(slide==8){
            $('#graphic').removeClass('slide7').removeClass('slide9');
            $('#graphic').addClass('slide8');
            
            $('#information').empty().append("Diabetic nephropathy can cause nausea...");
        }
        
        if(slide==9){
            $('#graphic').removeClass('slide8').removeClass('slide10');
            $('#graphic').addClass('slide9');
            
            $('#information').empty().append("...headaches...");
        }
        
        if(slide==10){
            $('#graphic').removeClass('slide9').removeClass('slide11');
            $('#graphic').addClass('slide10');
            
            $('#information').empty().append("...and anorexia or, conversely, weight gain from fluid accumlation.");
            $('#bodypart').empty().append("KIDNEYS");
        }
        
        if(slide==11){
            $('#graphic').removeClass('slide10').removeClass('slide12');
            $('#graphic').addClass('slide11');
            
            $('#information').empty().append("The stomach and digestive system is also affected by diabetes, including delaying stomach emptying..");
            $('#bodypart').empty().append("DIGESTIVE");
}
        
        if(slide==12){
            $('#graphic').removeClass('slide11').removeClass('slide13');
            $('#graphic').addClass('slide12');
            
            $('#information').empty().append("Diabetes medication itself can cause digestive issues, affecting the large intestine.");
        }
        
        if(slide==13){
            $('#graphic').removeClass('slide12').removeClass('slide14');
            $('#graphic').addClass('slide13');
            $('.eyesblur').removeClass('blureyes');
            
            $('#information').empty().append("Diabetes affects the bladder, causing a need for frequent urination.");
            $('#bodypart').empty().append("DIGESTIVE");        
        }
        
        if(slide==14){
            $('#graphic').removeClass('slide13').removeClass('slide15');
            $('#graphic').addClass('slide14').delay(500)
            $('.sweatdrop').removeClass('drop');
            setTimeout(blureyes,1000);

            function blureyes() {
                console.log("blur");
                $('.eyesblur').addClass('blureyes');
            }
            
            $('#information').empty().append("Diabetes can also cause blurred vision...");
            $('#bodypart').empty().append("EYES");        
        }
        
        if(slide==15){
            $('#graphic').removeClass('slide14').removeClass('slide16');
            $('#graphic').addClass('slide15')
            $('.eyesblur').removeClass('blureyes');
            setTimeout(drop,1000);
            
            function drop(){
                $('.sweatdrop').addClass('drop');
            }
            
            $('#information').empty().append("...excessive sweating...");            
            $('#bodypart').empty().append("SKIN");
            $('#next').removeClass('nomore')
        }
        
        if(slide==16){
            $('#graphic').removeClass('slide15');
            $('#graphic').addClass('slide16');
            $('.sweatdrop').removeClass('drop');
            
            $('#information').empty().append("...and finally, numbness or tingling in the feet. It's important for diabetics to have their feet checked annually.");            
            $('#bodypart').empty().append("FEET");
            $('#next').addClass('nomore');
        }        
    };
    
});
    
    