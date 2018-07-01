var grid = document.getElementById('pixel_canvas');
var submit = document.getElementById('inputsubmit');

/* This Function will make the grid based on the value the user inputs*/
function makeGrid() {
	//Create empty space for grid
	grid.innerHTML = '';
	//   Gets values for height and width from  the value user inputs

	var gridheight = document.getElementById('input_height').value;
	var gridwidth = document.getElementById('input_width').value;
	var table = document.createElement('table');
	//This Will Change color on click
	var color = document.getElementById("colorPicker");
    var addColor = function (cell) {
    	//  Put the selected color when clicked
        cell.addEventListener('click', function () {
            cell.style.backgroundColor = color.value;
            $('td').click(function(){
        color = $('#colorPicker').val();
        if($(this).attr('style')){
            $(this).removeAttr('style');
        }
        else {
            $(this).attr('style', 'background-color:' + color);
        };
    });
        });
    };
    
	for (var x = 1; x<gridheight; x++){
		var tr = document.createElement('tr');
		for (var y = 1; y < gridwidth; y++){
			var td = document.createElement('td');
			td.appendChild(document.createTextNode(''));
			tr.appendChild(td);
			td.addEventListener('click', addColor(td));

		}
		table.appendChild(tr);
	}
	grid.appendChild(table);
}


// Use this Call the function to make the grid and prevent the page from reloading when Submit button is clicked
submit.addEventListener('click', function(event){
	event.preventDefault();
	makeGrid();
});