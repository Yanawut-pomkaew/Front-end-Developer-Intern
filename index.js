let image = 0;
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
    // กรณีที่กด next ไปเรื่อย ๆ เมื่อถึงรูปสุดท้าย รูปที่แสดงต่อจากนี้จะเป็นรูปแรก
   
    if (n > slide.length-1) {
        image = 0;
    }    
    console.log(n);
    // กรณีที่กด previous ไปเรื่อย ๆ เมื่อถึงรูปแรก รูปที่แสดงต่อจากนี้จะเป็นรูปสุดท้าย
    if (n < 0) {
        image = slide.length-1;
    }

    for (let i = 0; i < slide.length; ++i) {
        // ถ้าไม่ใช่รูปที่เลื่อนดูอยู่ให้ซ่อนไว้
        if(i!=image) {
            slide[i].style.display = "none";  
        }
    }

    for (let i = 0; i < dot.length; ++i) {
        // ถ้าไม่ใช่เป็นจุดหน้าที่รูปแสดงผล ไม่ต้องแสดงสี
        if(i!=image) {
            dot[i].className = dot[i].className.replace(" active", "");      
        }
    }
            
    //รูปที่ดูอยู่ให้แสดงและจุดด้านล่างของหน้าที่แสดงต้องขึ้นเป็นสี
    slide[image].style.display = "block";  
    dot[image].className += " active";
}