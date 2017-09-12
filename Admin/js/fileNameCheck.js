/*Authors: Bryle Castro  9/10/2017*/

/*
* Function Name: checkFileName
* Description: Checks if the file being uploaded follows the following
*              naming scheme: exhibit-pathway-location.extension.
*/
function checkFileName(fileName, extensionName) {

  //File name elements to check against
  var exhibitName = ['albedo', 'sallyride'];
  var pathways = ['engineer', 'biologist', 'climatologist'];
  var location = ['top', 'right', 'left', 'bottom', 'middle','background'];
  var extension = [
    'png',
    'svg',
    'jpeg',
    'jpg',
    'gif',
    'bmp',
    'SVG',
    'PNG',
    'JPEG',
    'JPG',
    'GIF',
    'BMP',
    'mp4',
    'mov',
    'avi',
    'amv',
    'wmv',
    'MP4',
    'MOV',
    'AVI',
    'AMV',
    'WMV'
  ];
  var name = fileName;

  var bool = 0; //returns -1 if check is unsuccessful
  console.log("The current file name is " + name);

  //check that there exists two '-'
  var parsedName = name.split('-')
  if (parsedName.length != 3) {
    return -1;
  }

  //check exhibit exists
  bool = exhibitName.lastIndexOf(parsedName[0]);
  if (bool === -1) {
    console.log("parsedName[2] is:" + parsedName[0]);
    return -1;
  }

  //check pathway exists
  bool = pathways.lastIndexOf(parsedName[1]);
  if (bool === -1) {
    console.log("parsedName[2] is:" + parsedName[1]);
    return -1;
  }

  //Check location exists
  bool = location.lastIndexOf(parsedName[2]);
  if (bool === -1) {
    console.log("parsedName[2] is:" + parsedName[2]);
    return -1;
  }

  //Check if extension is a valid image extension
  bool = extension.lastIndexOf(extensionName);
  if (bool === -1) {
    console.log("image extension is:" + extensionName);
    return -1;
  }

  return 0; //Returns 0 if naming scheme is followed correctly
}
