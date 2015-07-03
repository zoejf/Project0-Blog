$(function() {

//form to create a new post
 var $newPostForm = $("#new_post_form"); 
 
 // underscore function to compile the html template
 var postingTemplate = _.template($('#post-template').html());

 //element to hold all of the posts
 var $postsSection = $("#posts-section");

 //constructor function to create new post
 function Posts (post_title, post_content) {
   this.post_title = post_title;
   this.post_content = post_content;
 };

 //variable to hold all of the new instances
 Posts.all = [];

//saves new post to Posts.all array
Posts.prototype.save = function(){
	   Posts.all.push(this);
	   console.log(this);
	 };

//renders new post to the page
Posts.prototype.render = function() {
 // _.each(Posts.all, function (post, index) {
   var $note = $(postingTemplate(this));
   // $note.attr('data-index', index);
   $postsSection.append($note)
   console.log("render works")
   // });
 }
 
//listen for a click on the submit button
  $newPostForm.on('submit', function(event) {
    event.preventDefault();

    // create new note object from form data
    var noteName = $('#postTitle').val();
    var noteContent = $('#postContent').val();
    var note = new Posts(noteName, noteContent);

    // save note
    note.save();

    // render note
    note.render();

    // reset the form
    // $newToDo[0].reset();
    // $('#todo-name').focus();
  });

   //listens to the click on the submit button
   // $newItemForm.on("submit", function(event) {
	  //    event.preventDefault();

	  //    console.log('form submitted!'); //printing that the submit button was clicked
	  //    console.log($('#postTitle').val() ); //to do list info
	  //    console.log($('#description').val() );
	     
	  //    // create new todo object from form data
	  //    var toDoName = $('#postTitle').val();
	  //    var toDoDesc = $('#description').val();
	  //    var toDoDate = $('#date').val();
	  //    // var toDoData = {title: toDoName, description: toDoDesc, date: toDoDate};
	     
	  //    //this is test data pre-loaded to the HTML
	  //   var note1 = new Posts("sample title", "my anonymous note");
	  //   note1.save();
	  //   note1.render();

	  //    // //this is for the to do list items that newly added in
	  //    var $listItems = $("#todo-list .to_do"); 
	  //    $listItems.click(function (event) {
	  //    event.preventDefault();
	  //    $(this).addClass("done");
	  //     })

   //   });
});