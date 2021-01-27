const Slide = document.querySelector('.slider');
const Images = document.querySelectorAll('.image');
const btns = document.querySelectorAll('.btn');
const dots = document.querySelectorAll('.dotbtn');

let index = 1;
let dot_index = 0;
let size = Images[0].clientWidth;

slideMove();

function slideMove(){
	Slide.style.transform = "translateX("+ (-size * index) +"px)";

	dots.forEach(dot => dot.classList.remove('active'));
	dots[dot_index].classList.add('active');
}

function slideAni(){
	Slide.style.transition = "transform 0.5s ease-in-out";
    slideMove();
}

function btnCheck(){
	if(this.id === "prevbtn"){
        if(index <=0) return;
		index--;
		if(dot_index === 0){
			dot_index = 4;
		}
		else{
			dot_index--;
		}
	}
	else{
        if(index >= Images.length - 1 ) return;
		index++;
		if(dot_index === 4){
			dot_index = 0;
		}
		else{
			dot_index++;
		}
	}
	console.log(index);
	console.log(dot_index);
	slideAni();

}

function dotFunc(){
	let i = Number(this.getAttribute("dot_index"));

	dot_index = i;
	index = i + 1;
	
	slideAni();
}


Slide.addEventListener('transitionend', () => {
    if(Images[index].id === "last"){
        Slide.style.transition = "none";
        index = Images.length - 2;
        Slide.style.transform = 'translateX(' + (-size * index) + 'px)'
    }
    if(Images[index].id === "first"){
        Slide.style.transition = "none";
        index = Images.length - index;
        Slide.style.transform = 'translateX(' + (-size * index) + 'px)'
    }
});

btns.forEach(btn => btn.addEventListener('click', btnCheck));
dots.forEach(dot => dot.addEventListener('click', dotFunc));
