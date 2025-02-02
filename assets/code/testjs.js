// JavaScript example for a user input dialog in ImageJ/Fiji

// Import the ImageJ classes we need
importPackage(Packages.ij);
importPackage(Packages.ij.gui);

function main() {
  if (N == 1) {
    var gd1 = new GenericDialog("Error");
    gd1.addMessage("This is not a stack");
    gd1.showDialog();
    return;
  }

  var I0 = IJ.getImage();
  // number of images
  var N = I0.getStackSize();
  var Nx = I0.getWidth();
  var Ny = I0.getHeight();

  // Create a dialog titled "Input Parameters"
  var gd = new GenericDialog("Input Parameters");
  var Np = gd.addNumericField("Integration length:", N, 0);
  var Ng = N - Np + 1;

  // Add color palette dropdown menu
  // for future work
  gd.showDialog();

  cc = 1;
  for (var i = 0; i < Ng - 1; i++) {
    var I1 = array3d(Ny, Nx, Np);
    r = array3d();
  }
}

function array3d(N1, N2, N3) {
  var array3D = new Array(N1);
  for (var i = 0; i < N1; i++) {
    array3D[i] = new Array(N2);
    for (var j = 0; j < N2; j++) {
      array3D[i][j] = new Array(N3);
      for (var k = 0; k < N2; k++) {
        array3D[i][j][k] = 0;
      }
    }
  }
  return array3D;
}

main();
