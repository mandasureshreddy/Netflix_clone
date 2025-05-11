
            
            // Search box toggle
            const searchIcon = document.querySelector('.search-icon');
            const searchBox = document.querySelector('.search-box');
            
            searchIcon.addEventListener('click', function() {
                searchBox.classList.toggle('active');
                if (searchBox.classList.contains('active')) {
                    searchBox.querySelector('input').focus();
                }
            });