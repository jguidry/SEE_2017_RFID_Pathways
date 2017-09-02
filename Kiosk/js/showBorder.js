function showBorder( id ){

  var avChar = id.charAt( 0 );

  switch( avChar ){

    case 's':
      document.getElementById(id).style.border= "5px solid green";
      document.getElementById("turtle").style.border= "none";
      document.getElementById("butterflyfish").style.border= "none";
      break;

    case 'b':
      document.getElementById(id).style.border= "5px solid green";
      document.getElementById("turtle").style.border= "none";
      document.getElementById("seahorse2").style.border= "none";
      break;

    case 't':
      document.getElementById(id).style.border= "5px solid green";
      document.getElementById("butterflyfish").style.border= "none";
      document.getElementById("seahorse2").style.border= "none";
      break;

    default:
      break;
  }
}
