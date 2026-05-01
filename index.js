  // for responsive button 
  
  const toggle = document.getElementById("menu-toggle");
    const navlinks = document.getElementById("navlinks");

    toggle.addEventListener("click", () => {
        navlinks.classList.toggle("show");
    });

    // for testimonial
    
        const cards = document.querySelectorAll('.skill-card');
        let current = 0;

        function showNextCard() {
            cards[current].classList.remove('active');
            current = (current + 1) % cards.length;
            cards[current].classList.add('active');
        }

        setInterval(showNextCard, 3000);
    

