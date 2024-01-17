const answers = ['A','A','B','B','A','A','B','B','A','A'];
const form = document.querySelector('form');
const result = document.querySelector('.result');
const span = document.querySelector('span');
const button = document.getElementById('submit')
button.addEventListener('click',(e)=>{
      
    form.querySelector('.hide').style.left = '0px';
    form.querySelector('.questions').style.transform = 'translateX(1600px)';
    button.value = 'last page';
    if(button.value === 'last page'){
        button.addEventListener('click',()=>{
            button.value = 'next';
            form.querySelector('.hide').style.left = '-1000px';
            form.querySelector('.questions').style.transform = 'translateX(0px)';
        })
    }


    e.stopPropagation();
 })

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let counter = 0;

    const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];

    userAnswer.forEach((answer,index)=>{
        if(answer === answers[index]){
            counter+= 10;
        
        }
    })
    // span.textContent = counter + '%';
    // result.classList.remove('d-none')
    scrollTo(0,0);
   setTimeout(()=>{
    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent =`${output}%`;
        if(output === counter){
            clearInterval(timer)
        }else{
            output++;
        }
    },20)
},10)
  
})
 