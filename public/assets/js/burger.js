// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $('.change-eaten').on('click', (event) => {
    event.preventDefault();
    var id = $(this).data('id');
    var devoured = $(this).data('devoured');
    var newDevouredState = {
      devoured: 1,
    };

    // Send the PUT request.
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newDevouredState,
    }).then(function () {
      console.log('changed eaten to', devoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $('.create-form').on('submit', (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log('click');
    var newBurger = {
      burger_name: $('#inlineFormInput').val().trim(),
      devoured: 0,
    };

    // Send the POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(function () {
      console.log('created new burger');
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $('.delete-burger').on('click', (event) => {
    var id = $(this).data('id');

    // Send the DELETE request.
    $.ajax('/api/burgers/' + id, {
      type: 'DELETE',
    }).then(function () {
      console.log('deleted burger', id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
