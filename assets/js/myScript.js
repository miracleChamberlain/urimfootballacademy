// Preloader
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            const mainContent = document.getElementById('mainContent');

            // Animate letters
            const letters = document.querySelectorAll('#preloaderText span');
            letters.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 80}ms`;
            });

            // Hide preloader after 3.5 seconds
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    mainContent.style.display = 'block';
                }, 1000);
            }, 3500);
        });
         
        const menuBtn = document.getElementById('menuBtn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        function openMenu() {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        }

        function closeMenu() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }

        // Toggle with hamburger button
        menuBtn.addEventListener('click', openMenu);
    
 
