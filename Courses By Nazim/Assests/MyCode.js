          var list = [
    {'title': 'Math Courses', 'description': 'Here! on a tout les cours de physique pour ST1', 'url': '#', 'color': '#3d8929'}, 
    
    {'title': 'Physics Courses', 'description': 'Here! on a tout les cours de physique pour ST1', 'url': '#', 'color': '#bd69be'},
    
    {'title': 'Chimie Courses', 'description': 'Here! on a tout les cours de chimie pour ST1', 'url': '#', 'color': '#F7725E'},
]
      
          var current_course = 0;

function prev() {
    console.log('Previous Course');
    
    current_course--;
    if (current_course < 0)
        current_course = list.length - 1
    
    document.getElementById("dars_id").style.background = list[current_course].color;
    document.getElementById("dars_id").innerHTML = list[current_course].title;
    document.getElementById("desc_id").innerHTML = list[current_course].description;
    document.getElementById("url_id").href = list[current_course].url;
}
            
function next() {
    console.log('Next Course');
        current_course++;
    if (current_course >= list.length)
        current_course = 0
    
    document.getElementById("dars_id").style.background = list[current_course].color;
    document.getElementById("dars_id").innerHTML = list[current_course].title;
    document.getElementById("desc_id").innerHTML = list[current_course].description;
    document.getElementById("url_id").href = list[current_course].url;
}
// Code By Nazim