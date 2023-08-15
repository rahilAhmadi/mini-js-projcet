const counters=document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText='0';
    const updateCounter=()=>{
        const target=+counter.getAttribute('data-target');
        const counterContent=+counter.innerText;
        const increament=target/700;

        if(counterContent<target){
            counter.innerText=Math.ceil(counterContent+increament);
            setTimeout(updateCounter, 1);
        }
        else{
            counter.innerText=target;
        }
    }
    updateCounter();
});
