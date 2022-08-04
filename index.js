console.log("Working");
//Q-1 Create a button , on click of which you should be able to hide a paragraph text,
// create another button onclick of which this paragraph should be visible
$(document).ready(function(){
    $("#hide").click(function(){
        $("#para").hide();
    });
    $("#show").click(function(){
        $("#para").show();
    })
});

//Q-2  Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/12",
    type: "GET",
    success: function (data) {
      document.querySelector("h1").innerText = data.title;
    },
  });