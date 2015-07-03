$(function() {

//adding the id of new_to_do to a variable of new item
 var $newPostForm = $("#new_post"); 
 
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
 _.each(Posts.all, function (post, index) {
   var $note = $(postingTemplate(post));
   $note.attr('data-index', index);
   $postsSection.append($note)
   // console.log("render works")
   });
 }
 
   //listens to the click on the submit button
   $newItemForm.on("submit", function(event) {
	     event.preventDefault();

	     console.log('form submitted!'); //printing that the submit button was clicked
	     console.log($('#item_name').val() ); //to do list info
	     console.log($('#description').val() );
	     
	     // create new todo object from form data
	     var toDoName = $('#item_name').val();
	     var toDoDesc = $('#description').val();
	     var toDoDate = $('#date').val();
	     // var toDoData = {title: toDoName, description: toDoDesc, date: toDoDate};
	     
	     //this is test data pre-loaded to the HTML
	    var note1 = new Posts("sample title", "my anonymous note");
	    note1.save();
	    note1.render();

	     // //this is for the to do list items that newly added in
	     var $listItems = $("#todo-list .to_do"); 
	     $listItems.click(function (event) {
	     event.preventDefault();
	     $(this).addClass("done");
	      })

     });
});