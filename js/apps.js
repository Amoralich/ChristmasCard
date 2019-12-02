const countdown = document.querySelector('.countdown');
const launchData = new Date('Dec 24, 2019 00:00:01').getTime();

const interval = setInterval(()=>{
    console.log('tick');
    const now = new Date().getTime();
    const distance = launchData - now;
    console.log(distance);

    const days = Math.floor(distance/(1000*60*60*24));
    console.log(days)

    const hourse = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    const secounds = Math.floor((distance % (1000*60))/1000 );
    console.log(days, "days");
    console.log(hourse, "hours");
    console.log(minutes, "minute");
    console.log(secounds, "secound");

    //Template literals
    countdown.innerHTML = `
        <div><span>${days} päeva</span></div>
        <div><span>${hourse} tundi</span></div>
        <div><span>${minutes} minutid</span></div>
        <div><span>${secounds} sekundit</span></div>
    `;

    if(distance < 0){
        clearInterval(interval);
        countdown.getElementsByClassName.color = '#17a2b8'
        countdown.innerHTML = 'Häid Jõule!'
    }

},1000);