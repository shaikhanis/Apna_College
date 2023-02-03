let btn = document.getElementById('toglebtn')
        let bulb = document.getElementById('bulb')
        btn.addEventListener('click',toggle)

        function toggle(e){
            if(btn.textContent.includes('on')){
                bulb.src = "https://live.staticflickr.com/3580/3346906435_63228a021d_z.jpg"
                btn.textContent="click to off"
            }else{
                bulb.src = "https://www.vector-eps.com/wp-content/gallery/10-lamps-template-images/lamps-template-image7.jpg"
                btn.textContent="click to on"
            }
            
        }