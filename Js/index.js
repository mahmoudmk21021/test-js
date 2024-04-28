// ?  nav Box

const colorBoxWidth = $(".nav_Box").outerWidth();
$(".nav_Box").css({ left: `-${colorBoxWidth}px` });
let isOpen = false;

$(".gear-icon").on("click", () => {
  const colorBoxWidth = $(".nav_Box").outerWidth();
  if (isOpen) {
    // * close it
    $(".nav_Box").css({ left: `-${colorBoxWidth}px` });
    $(".gear× i").removeClass("fa-solid fa-xmark").addClass("fa-solid fa-bars");
    isOpen = false;
  } else {
    $(".nav_Box").css({ left: `0px` });
    $(" .gear× i")
      .removeClass("fa-solid fa-bars")
      .addClass("fa-solid fa-xmark");

    isOpen = true;
  }
});

// ?  contact

$(document).ready(function () {
  $("#Contact_Us").click(function () {
    $("#hero").addClass("d-none");
    $("#mealRecipes").addClass("d-none");
    $("#search").addClass("d-none");
    $("#category").addClass("d-none");
    $("#area").addClass("d-none");
    $("#Ingredients").addClass("d-none");
    $("#contact").removeClass("d-none");
  });
});

// ?  search
$(document).ready(function () {
  $("#searchMeal").click(function () {
    $("#hero").addClass("d-none");
    $("#mealRecipes").addClass("d-none");
    $("#contact").addClass("d-none");
    $("#category").addClass("d-none");
    $("#area").addClass("d-none");
    $("#Ingredients").addClass("d-none");
    $("#search").removeClass("d-none");
  });
});

// ?  Categories
$(document).ready(function () {
  $("#Categories").click(function () {
    $("#hero").addClass("d-none");
    $("#mealRecipes").addClass("d-none");
    $("#contact").addClass("d-none");
    $("#search").addClass("d-none");
    $("#area").addClass("d-none");
    $("#Ingredients").addClass("d-none");
    $("#category").removeClass("d-none");
  });
});

// ?  AreaMeal
$(document).ready(function () {
  $("#AreaMeal").click(function () {
    $("#hero").addClass("d-none");
    $("#mealRecipes").addClass("d-none");
    $("#contact").addClass("d-none");
    $("#search").addClass("d-none");
    $("#category").addClass("d-none");
    $("#Ingredients").addClass("d-none");
    $("#area").removeClass("d-none");
  });
});

// ?  IngredientsMeal
$(document).ready(function () {
  $("#IngredientsMeal").click(function () {
    $("#hero").addClass("d-none");
    $("#mealRecipes").addClass("d-none");
    $("#contact").addClass("d-none");
    $("#search").addClass("d-none");
    $("#category").addClass("d-none");
    $("#area").addClass("d-none");
    $("#Ingredients").removeClass("d-none");
  });
});

// // ?  api
// var x = new XMLHttpRequest();
// x.open("Get", "https://www.themealdb.com/api.php");
// x.send();
// x.addEventListener("readystatechange", function () {
//   if (x.readyState === 4) {
//     console.log(x.response);
//   }
// });
