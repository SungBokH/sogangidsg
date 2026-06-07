// Click-to-open dropdown for the Members menu
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('.dropdown-toggle');

    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        var dropdown = toggle.nextElementSibling;
        var isOpen = dropdown.classList.contains('open');

        // Close all dropdowns first
        document.querySelectorAll('.dropdown.open').forEach(function (d) {
          d.classList.remove('open');
        });
        document.querySelectorAll('.dropdown-toggle.open').forEach(function (t) {
          t.classList.remove('open');
        });

        // Toggle this one
        if (!isOpen) {
          dropdown.classList.add('open');
          toggle.classList.add('open');
        }
      });
    });

    // Click outside to close
    document.addEventListener('click', function () {
      document.querySelectorAll('.dropdown.open').forEach(function (d) {
        d.classList.remove('open');
      });
      document.querySelectorAll('.dropdown-toggle.open').forEach(function (t) {
        t.classList.remove('open');
      });
    });

    // Prevent close when clicking inside the dropdown menu itself
    document.querySelectorAll('.dropdown').forEach(function (d) {
      d.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    });
  });
})();
