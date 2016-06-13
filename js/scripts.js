function Item(titleIn, descriptionIn, addDateIn, deadlineIn) {
  this.title=titleIn;
  this.description=descriptionIn;
  this.addDate=addDateIn;
  this.deadline=deadlineIn;
}


$(document).ready(function(){
  $("#new-item").submit(function(event){
    event.preventDefault();
    var titleInput = $("#title-input").val();
    var descriptionInput = $("#description-input").val();
    var addDateInput = $("#addDate-input").val();
    var deadlineInput = $("#deadline-input").val();
    var newItem = new Item (titleInput, descriptionInput, addDateInput, deadlineInput);

    $("ul#todo-list").append("<li><span class='todo-item'>"+newItem.title+"</span></li>");

    $("#title-input").val("");
    $("#description-input").val("");
    $("#addDate-input").val("");
    $("#deadline-input").val("");

    $(".todo-item").last().click(function(){
      // debugger;
      $("#item-label").text(newItem.title);
      $("#item-description").text(newItem.description);
      $("#item-addDate").text(newItem.addDate);
      $("#item-deadline").text(newItem.deadline);
    });

  });
});
