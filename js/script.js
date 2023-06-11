// Click Text To Copy
const copyTextElements = document.querySelectorAll('.copy-text');

    copyTextElements.forEach(function(element) {
        element.addEventListener('click', function() {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            alert('Command copied to clipboard!');
        });
    });


    // SEARCH 

    // function searchFunction() {
    //     let input = document.querySelector('.search-input').value;
        
    //     // get all the cards, category titles and card wrappers on the page
    //     let cards = document.querySelectorAll('.card');
    //     let categoryTitles = document.querySelectorAll('.card-category-title');
    //     let cardWrappers = document.querySelectorAll('.card-wrapper');
        
    //     // hide all the category titles and card wrappers
    //     for (let title of categoryTitles) {
    //       title.style.display = 'none';
    //     }
    //     for (let wrapper of cardWrappers) {
    //       wrapper.style.display = 'none';
    //     }
        
    //     // loop through the cards and check if the app name matches the search input
    //     for (let card of cards) {
    //       let appName = card.querySelector('.card-name').textContent;
    //       if (appName.toLowerCase().includes(input.toLowerCase())) {
    //         // app name matches the search input
    //         // do something with the matching card
    //         card.style.display = 'block';
    //         card.parentNode.style.display = 'flex';
    //         card.parentNode.style.justifyContent = 'center';
    //       } else {
    //         // app name does not match the search input
    //         // hide the card
    //         card.style.display = 'none';
    //       }
    //     }
    //   }


    function searchFunction() {
        let input = document.querySelector('.search-input').value;
        
        // get all the cards, category titles and card wrappers on the page
        let cards = document.querySelectorAll('.card');
        let categoryTitles = document.querySelectorAll('.card-category-title');
        let cardWrappers = document.querySelectorAll('.card-wrapper');
        
        // hide all the category titles and card wrappers
        for (let title of categoryTitles) {
          title.style.display = 'none';
        }
        for (let wrapper of cardWrappers) {
          wrapper.style.display = 'none';
        }
        
        // loop through the cards and check if the app name matches the search input
        for (let card of cards) {
          let appName = card.querySelector('.card-name').textContent;
          if (appName.toLowerCase().includes(input.toLowerCase())) {
            // app name matches the search input
            // do something with the matching card
            card.style.display = 'block';
            card.parentNode.style.display = 'flex';
            card.parentNode.style.justifyContent = 'center';
          } else {
            // app name does not match the search input
            // hide the card
            card.style.display = 'none';
          }
        }
      }
      
      function closeFunction() {
        // clear the search input
        document.querySelector('.search-input').value = '';
        
        // show all the cards, category titles and card wrappers
        let cards = document.querySelectorAll('.card');
        let categoryTitles = document.querySelectorAll('.card-category-title');
        let cardWrappers = document.querySelectorAll('.card-wrapper');
        
        for (let title of categoryTitles) {
          title.style.display = 'block';
        }
        for (let wrapper of cardWrappers) {
          wrapper.style.display = 'flex';
          wrapper.style.justifyContent = 'space-between';
        }
        for (let card of cards) {
          card.style.display = 'block';
        }
      }
      
      function handleEnterKey(event) {
        if (event.keyCode === 13) {
          // user pressed the Enter key
          // call the searchFunction
          searchFunction();
        }
      }