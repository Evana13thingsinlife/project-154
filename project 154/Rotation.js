AFRAME.registerComponent("diver-rot-reader", {
    schema: {
      speedOfRoation: { type: "number", default: 0 },
      speedOfMovement: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        this.data.speedOfRoation = this.el.getAttribute("rotation");      
        this.data.speedOfMovement = this.el.getAttribute("position");
  
        var dRotation = this.data.speedOfRoation;      
        var dPosition = this.data.speedOfMovement;
        if (e.key === "ArrowDown") {
          if (dPosition.z < 20) {
            dPosition.z += 0.1;
            this.el.setAttribute("position", dPosition);
          }
        }
        if (e.key === "ArrowUp") {
          if (dPosition.z> -10) {
            dPosition.z -= 0.1;
            this.el.setAttribute("position", dPosition);
          }
        }
        if (e.key === "ArrowRight") {
          if (dRotation.y > -360) {
            dRotation.y -= 0.5;
            this.el.setAttribute("rotation", dRotation);
          }
          if (dsPosition.x < 20) {
            dPosition.x += 0.05;
            this.el.setAttribute("position", dPosition);
          }
        }
        if (e.key === "ArrowLeft") {
          if (dRotation.y <360) {
            dRotation.y += 0.5;
            this.el.setAttribute("rotation", dRotation);
          }
          if (dPosition.x > -20) {
            dPosition.x -= 0.05;
            this.el.setAttribute("position", dPosition);
          }
        }
      });
    }
  });