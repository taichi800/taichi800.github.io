    function filterLinks() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('filter-links');
      filter = input.value.toUpperCase();
      ul = document.getElementsByClassName('category');
      for (i = 0; i < ul.length; i++) {
        a = ul[i].getElementsByTagName('a');
        for (j = 0; j < a.length; j++) {
          txtValue = a[j].textContent || a[j].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[j].style.display = "";
          } else {
            a[j].style.display = "none";
          }
        }
      }
    }
