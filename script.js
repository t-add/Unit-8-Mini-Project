let actionmovies = ["https://assets-prd.ignimgs.com/2022/03/01/fistful-of-vengeance-1646116375050.jpg"];
let comedymovies = ["https://img.dtcn.com/image/themanual/4ldpbxicygkkr8fghgjklphrfuc-500x500.jpg"];
let dramamovies = ["https://media.glamour.com/photos/5ec2e91dccfbc8c1a8fe8cbf/master/w_3000,h_2032,c_limit/MSDTITA_FE057.jpg"];
$(".submit-button").click(function() {
    let genreInput = $(".get-suggestions").val();
    $(".shows").empty();
    //Write code for Task Two below this line1

    if (genreInput === "action") {
        for (let movie of actionmovies) {
            $(".shows").append("<img src=\"" + movie + "\">");
        }
    }
    if (genreInput === "comedy") {
        for (let movie of comedymovies) {
            $(".shows").append("<img src=\"" + movie + "\">");
        }
    }
    if (genreInput === "drama") {
        for (let movie of dramamovies) {
            $(".shows").append("<img src=\"" + movie + "\">");
        }
    }
});

$(".suggestion-button").click(function() {
    let suggestion = $(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
    //Write code for Task Three below this line!
	actionmovies.push(suggestion);
    console.log(actionmovies);
dramamovies.push(suggestion);
    console.log(dramamovies);
    comedymovies.push(suggestion);
    console.log(comedymovies);

});