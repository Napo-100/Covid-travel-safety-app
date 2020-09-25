// maps.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
// var autocomplete = new google.maps.places.Autocomplete(input);

//https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters


// function initAutocomplete() {
//     // Create the autocomplete object, restricting the search predictions to
//     // geographical location types.
//     autocomplete = new google.maps.places.Autocomplete(
//       document.getElementById("search-input"),
//       { types: ["geocode"] }
//     );
//     // Avoid paying for data that you don't need by restricting the set of
//     // place fields that are returned to just the address components.
//     autocomplete.setFields(["address_component"]);
//     // When the user selects an address from the drop-down, populate the
//     // address fields in the form.
//     autocomplete.addListener("place_changed", fillInAddress);
//   };