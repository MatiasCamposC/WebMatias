
        document.getElementById("cvDownloadBtn").addEventListener("click", function() {
            var dropdown = document.getElementById("cvDropdown");
            var selectedOption = dropdown.options[dropdown.selectedIndex].value;
            if (selectedOption) {
                window.open(selectedOption, "_blank");
            } else {
                alert("Por favor, selecciona un idioma para descargar el CV.");
            }
        });

