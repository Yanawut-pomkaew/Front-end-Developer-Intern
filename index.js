let image = 1;
display(image);

function changeImage(n) {
    display(image +=n);
}

function currentImage(n) {
    display(image = n);
}

function display(n) {
    let slide = document.getElementsByClassName("slide");
    let dot = document.getElementsByClassName("dot");
            
    if (n > slide.length) {
        image = 1
    }    

    if (n < 1) {
        image = slide.length
    }

    for (let i = 0; i < slide.length; ++i) {
        // ถ้าไม่ใช่รูปที่เลื่อนดูอยู่ให้ซ่อนไว้
        if(i+1!=image) {
            slide[i].style.display = "none";  
        }
    }

    for (let i = 0; i < dot.length; ++i) {
        // ถ้าไม่ใช่เป็นจุดหน้าที่รูปแสดงผล ไม่ต้องแสดงสี
        if(i+1!=image) {
            dot[i].className = dot[i].className.replace(" active", "");      
        }
    }
            
    //รูปที่ดูอยู่ให้แสดงและจุดด้านล่างของหน้าที่แสดงต้องขึ้นเป็นสี
    slide[image-1].style.display = "block";  
    dot[image-1].className += " active";
}