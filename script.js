$(document).ready(function(){
    $('.run').click(function(){
        $("input,button").attr('disabled',true);
        $(".choice-result").parent('div').removeClass("result");
        $(".choice-result").parent('div').removeClass("noresult");
        $(".choice-result").html(`<div class="loader m-auto"></div>`);
        let choiceBoxes = document.querySelectorAll('.choice-block input');
        let choiceCount = choiceBoxes.length;
        let rand = getRandomInt(-1,choiceCount);
        console.log(rand);
        setTimeout(() => {
            if(rand < 0){
                $(".result-box").fadeIn();
                $(".choice-result").html(`<i class="far fa-frown display-4"></i><br/>None of these are good idea!`);
                $(".choice-result").parent('div').addClass("noresult");
                $("input,button").attr('disabled',false);
            }else{
                $(".result-box").fadeIn();
                $(".choice-result").parent('div').addClass("result");
                $(".choice-result").html(`<i class="far fa-smile-beam display-4"></i><br/>I think you shold go with: <hr/>`+choiceBoxes[rand].value);
                $("input,button").attr('disabled',false);
                console.log(choiceBoxes[rand].value);
            }
        }, 2000);
    });
    $('.addChoice').click(function(){
        $('.choice-holder').append(`<div class="input-group mb-3 choice-block">
        <input type="text" class="form-control shadow border p-4" placeholder="Choice..."/>
        <div class="input-group-append">
            <button onclick="remove(this)" class="btn btn-danger d-block w-100 shadow"><i class="fa fa-trash"></i></button>
        </div>
    </div>`);
    })
});


function getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
function remove(element) {
    element.offsetParent.remove();
    console.log(element);
}

/*
inputs = document.querySelectorAll('.form-group input');
let randomIndex = getRandomInt(-1,inputs.length - 1)
if(randomIndex < 0){
temp1.innerHTML = "none"
}else {
temp1.innerHTML = inputs[randomIndex].value
}
*/